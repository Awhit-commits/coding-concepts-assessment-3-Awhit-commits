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

  componentDidMount() {
    this.loadData();
  }

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
                <Link to={`info/${account._id}`}>
                  <p>Name: {account.accountName}</p>
                </Link>
                <p>Account Number: {account.accountNumber}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
