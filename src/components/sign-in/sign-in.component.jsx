import React, { Component } from 'react'
import "./sign-in.styles.scss"
import FormInput from '../form-input/FormInput.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import CustomButton from '../button/CustomButton'

export class SignIn extends Component {
    constructor(){
        super()

        this.state = {
            email:'',
            password:''
        }
        
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state

        try {
            // console.log(email, password)
            await auth.signInWithEmailAndPassword(email, password)
            
            this.setState({email: '', password: ''})
        } catch (error) {
            alert(error.message)
            console.log(error)
        }
        
        
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }


    render() {
        return (
            <div className="sign-in">
                <h2 className="haveAccount">Already have an account?</h2>
                <span className="title">Sign in with your email and password</span>

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

