import React from 'react'
import "./signIn-signUp.scss"
import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/Signup"

const signInSignUp = () => {
    return (
        <div className="sign-in-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default signInSignUp
