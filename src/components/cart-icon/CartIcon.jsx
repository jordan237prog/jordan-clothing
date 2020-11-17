import React, { Component } from 'react'
import './CartIcon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/reusable-shopping-bag-svgrepo-com.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">10</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch (toggleCartHidden())
})

export default connect(null, mapDispatchToProps) (CartIcon)
