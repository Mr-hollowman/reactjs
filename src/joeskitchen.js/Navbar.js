import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-banner">
        Joe's Kitchen
      </div>

      <div className="nav-cart">
        <i className="fa fa-shopping-cart"></i>
        <div className="cart-items">0</div>
      </div>
    </div>
  )
}
