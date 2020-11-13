import React from 'react'
import './Header.conponent.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../logo.svg'


const Header = () => {
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
                    SHOP 
                </Link>
                <Link className="option" to="/Shop">
                    CONTACT 
                </Link>
            </div>
        </div>
    )
}

export default Header
