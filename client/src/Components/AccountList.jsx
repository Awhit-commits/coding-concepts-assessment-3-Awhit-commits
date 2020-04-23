import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AccountList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bankAccount: [],
    };
    // console.log(this.props.accountArray);
  }
//Method to load data from database
  componentDidMount() {
    this.loadData();
  }
//Function to retrieve data from database
  loadData = async () => {
    let response = await fetch("/api");
    let json = await response.json();
    console.log(json);
    this.setState({ bankAccount: json });
  };
  render() {
    return (
      <div>
        <h1></h1>
        <div>
          {this.state.bankAccount.map((account) => {
            return (
              <div key={account._id}>
                
                  <p>Name: <Link to={`info/${account._id}`}>{account.accountName}</Link></p>
                
                <p>Account Number: {account.accountNumber}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
