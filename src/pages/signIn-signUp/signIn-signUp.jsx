import React from 'react'
import "./signIn-signUp.scss"
import SignIn from "../../components/sign-in/sign-in.component"

const signInSignUp = () => {
    return (
        <div className="sign-in-sign-up">
            <SignIn />
            <SignIn />
        </div>
    )
}

export default signInSignUp
