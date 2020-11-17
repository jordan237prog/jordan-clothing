import './Card.scss'
import CustomButton from '../button/CustomButton'

import React from 'react'

function CardDropDown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
      </div>
      <CustomButton>GO TO CHECK</CustomButton>
    </div>
  )
}

export default CardDropDown
