import React, { Component } from 'react'
import './CartIcon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/reusable-shopping-bag-svgrepo-com.svg'

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">110</span>
  </div>
)
export default CartIcon
