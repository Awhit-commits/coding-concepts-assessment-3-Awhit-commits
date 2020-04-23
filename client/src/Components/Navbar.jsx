import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <li>
                    <ul>
                <Link to= "/">Home</Link>
                </ul>
                <ul>
                    <Link to ="/create">Add a New Form</Link>
                </ul>
                </li>
            </div>
        )
    }
}
