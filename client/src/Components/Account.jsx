import React, { Component } from 'react'

export default class Account extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            bankAccount:""
             
        }
    }
    componentDidMount(){
        this.loadData()
    }

    //Function to load specific account information using id
    loadData = async () => {
        console.log(this.props.match.params.id);
        let response = await fetch(`/api/${this.props.match.params.id}`);
        let json = await response.json();
        console.log(json);
        this.setState({ bankAccount: json });
      };

      //Function to add money and update it in the database
      addMoney = async()=>{
          this.state.bankAccount.accountBalance += 100;
        let response = await fetch(`/api/${this.props.match.params.id}`,
        {method:'put',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        },body:JSON.stringify({accountBalance:this.state.bankAccount.accountBalance})});
        let json = await response.json();
        console.log(json);
        this.setState({ bankAccount: json });

      }
    render() {
        return (
            <div>
                <h1>Account Information</h1>
                <p>Name: {this.state.bankAccount.accountName}</p>
                <p>Number: {this.state.bankAccount.accountNumber}</p>
                <p>Balance: ${this.state.bankAccount.accountBalance}</p>
                <div>
                    <button onClick = { this.addMoney}> Deposit $100</button>
                </div>

            </div>
        )
    }
}
