import React from 'react'
import './Header.conponent.scss'
import CartIcon from '../cart-icon/CartIcon'
import CardDropDown from '../cart/CardDropDown'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../logo.svg'
import { auth } from '../../firebase/firebase.utils'
import {connect} from 'react-redux'

const Header = ({ currentUser, hidden }) => {
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

                <CartIcon />

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
            { !hidden && <CardDropDown />}
        </div>
    )
}

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header)
