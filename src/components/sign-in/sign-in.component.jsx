import React, { Component } from 'react'
import "./sign-in.styles.scss"

export class SignIn extends Component {
    constructor(){
        super()

        this.state = {
            email:'',
            password:''
        }
        
    }

    handleSubmit = event => {
        event.preventDefault();
        
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Signin with you email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="email" 
                    name="email" 
                    value={this.props.email}
                    required
                    onChange={this.handleChange}
                    />
                    <label htmlFor="">Email</label>

                    <input 
                    type="password" 
                    name="password" 
                    value={this.props.password}
                    required 
                    onChange={this.handleChange}
                    />
                    <label htmlFor="">Password</label>

                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        )
    }
}

export default SignIn

