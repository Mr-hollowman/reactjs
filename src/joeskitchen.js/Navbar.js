import React from 'react'

export default function Navbar({ setIsCartOpen, cartItems }) {
  const cartValues = () => {
    const count = cartItems.reduce((acc, crr) => {
      let count = acc + parseInt(crr.QTY)
      return count
    }, 0)
    return count
  }
  return (
    <div className="navbar">
      <div className="navbar-banner">
        Joe's Kitchen
      </div>

      <div className="nav-cart" onClick={() => setIsCartOpen(true)}>
        <i className="fa fa-shopping-cart"></i>
        <div className="cart-items">{cartValues()}</div>
      </div>
    </div>
  )
}
