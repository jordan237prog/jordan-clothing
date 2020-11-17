import React from 'react'
import './Header.conponent.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../logo.svg'
import { auth } from '../../firebase/firebase.utils'
import {connect} from 'react-redux'

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <div>
                <Link className="logo-container" to="/">
                    <Logo className="logo"/>
                </Link>
            </div>
            <div className="options">
                <Link className="option" to="/Shop">
                    SHOP 
                </Link>
                <Link className="option" to="/Shop">
                    CONTACT 
                </Link>

                { currentUser  ? 
                    (<div 
                        className="option sign-out"
                        onClick={() => {
                            auth.signOut()
                            // window.location.reload(false)
                        }}
                     >
                        SIGN OUT 
                    </div>) :

                    (<Link className="option" to="/signin">
                        SIGN IN
                    </Link>)
                }

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
