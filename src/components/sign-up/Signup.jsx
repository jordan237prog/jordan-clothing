import React, { Component } from 'react'
import "./Signup.styles.scss"
import FormInput from '../form-input/FormInput.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import CustomButton from '../button/CustomButton'

export default class Signup extends Component {
    constructor(){
        super()
        this.state = {
            displayName : '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        
         const {displayName, email, password, confirmPassword } = this.state

         if(password !== confirmPassword){
             alert("Password and the comfirm Password don't match, please verify and try again")
             return
         }

         try {
             const { user } = await auth.createUserWithEmailAndPassword(
                 email,
                 password
             )

             await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName : '',
                email: '', 
                password: '',
                confirmPassword: '',
            })

         } catch (error) {
             console.log(error)
         }
        
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const {displayName, email, password, confirmPassword } = this.state

        return (
            <div className="sign-in">
                <h2 className="haveAccount">Don't have an account?</h2>
                <span className="title">Create your account here</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="text" 
                    name="displayName" 
                    value={this.state.displayName}
                    required
                    label="User Name"
                    handleChange={this.handleChange}
                    />

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

                    <FormInput 
                    type="password" 
                    name="confirmPassword" 
                    value={this.state.confirmPassword}
                    required 
                    label='Confirm Password'
                    handleChange={this.handleChange}
                    />
                    
                    <div className="customBtnContainer">
                        <CustomButton type="submit">
                            Sign Up
                        </CustomButton>
                        
                        {/* <CustomButton onClick={signInWithGoogle} isGoogle>
                            Use Google
                        </CustomButton> */}
                    </div>

                </form>
            </div>
        )
    }
}
