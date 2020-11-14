import React, { Component } from 'react'
import "./sign-in.styles.scss"
import FormInput from '../form-input/FormInput.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import CustomButton from '../button/CustomButton'

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
                <h2 className="haveAccount">Already have an account</h2>
                <span className="title">Signin with you email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name="email" 
                    value={this.state.email}
                    required
                    label="Email"
                    handleChange={this.handleChange}
                    />

                    <FormInput 
                    type="password" 
                    name="password" 
                    value={this.state.password}
                    required 
                    label='Password'
                    handleChange={this.handleChange}
                    />
                    
                    <div className="customBtnContainer">
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        
                        <CustomButton onClick={signInWithGoogle} isGoogle>
                            Use Google
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn

