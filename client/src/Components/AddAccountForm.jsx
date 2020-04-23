import React, { Component } from 'react'

export default class AddAccountForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            accountName:"",
            accountType:"",
            accountBalance:"",
            accountNumber:"",
            newAccount :[]
           
             
        }
    }
    //Handle Values in the input field
    handleChange = (event)=>{
        if(event.target.name ==="name"){
            this.setState({accountName:event.target.value})
        }
        if(event.target.name ==="number"){
            this.setState({accountNumber:event.target.value})

        }

        if(event.target.name ==="balance"){
            this.setState({accountBalance:event.target.value})
        }
        if(event.target.name ==="type"){
            this.setState({accountType:event.target.value})
        }

    }

    //When button is pressed, account is created in database
    handleSubmission = async (event)=>{
        event.preventDefault();
        // this.props.addAccount(this.state)
        let response = await fetch('/api',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            },body:JSON.stringify({accountName:this.state.accountName,accountBalance:this.state.accountBalance,accountNumber:this.state.accountBalance,accountType:this.state.accountType})
        })
        // let json = await response.JSON();
        // console.log(json);
        
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Add an Account</h1>
                    <form action="">
                        <div className = "form-group">
                        <label htmlFor="name">Name</label>
                        <div className ="form-control ">
                            <input type="text" name="name" id="" value = {this.state.accountName} onChange= {this.handleChange}/>
                        
                        </div>
                        </div>
                        <div>
                            <label htmlFor="number">Account Number</label>
                            <div className ="form-control">
                                <input type="number" name="number" id="" value = {this.state.accountNumber} onChange={this.handleChange}/>
                            </div>

                        </div>
                        <div className = "form-group">
                            <label htmlFor="balance">Balance</label>
                            <div className= "form-control">
                                <input type="number" name="balance" id="" value= {this.state.accountBalance} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <select name="type" id="" value = {this.state.accountType} onChange = {this.handleChange}>
                            <option value="">Select An Account Type</option>
                            <option value="Savings">Savings</option>
                            <option value="Checking">Checking</option>
                        </select>
                        <div>
                            <input type="button" value="Submit" onClick={this.handleSubmission}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
