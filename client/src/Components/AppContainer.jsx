import React, { Component } from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import AccountList from './AccountList'
import AddAccountForm from './AddAccountForm'
import Account from './Account'
import Navbar from './Navbar'


export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            accountArray:""
             
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData = async()=>{
        let response = await fetch('/api')
        let json= await response.json()
        console.log(json);
        this.setState({accountArray:json})
        console.log(this.state.accountArray);

    }
//     addAccount = async()=>{
//         let response = await fetch('/api',{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json;charset=utf-8',
//                 body:JSON.stringify({accountName:this.state.accountName})
//   },
//         })

    // }
    render() {
        return (
            <div>
                <Router>
                <Navbar/>
            
                <h1>Bank Account Manager</h1>

                <Route path ="/" exact component={AccountList}/>
                <Route path = "/create"><AddAccountForm/></Route>
                <Route path ="/info/:id" component={Account}/>                
                </Router>
            </div>
        )
    }
}
