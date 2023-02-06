import React, { useEffect } from 'react'
function CartPage({ cartItems, setCartItems, setIsCartOpen }) {

  const handleIncrement = (item, variant) => {
    let newCart
    if (variant === "increment") {
      newCart = cartItems.map((ite) => {
        return ite.ID === item.ID ? { ...ite, QTY: ite.QTY += 1 } : ite
      })
    }
    else {
      newCart = cartItems.map((ite) => {
        return ite.ID === item.ID && ite.QTY != 0 ? { ...ite, QTY: ite.QTY -= 1 } : ite
      })
    }
    newCart = cartItems.filter(ite => ite.QTY != 0)
    setCartItems(newCart);
  }

  const handleRemove = (item) => {
    const newCart = cartItems.filter((ite) => ite.ID !== item.ID)
    setCartItems(newCart)
  }
  const totalAmoutDisplay = () => {
    const totalAmout = cartItems.map((a) => ({ amout: a.AMT, quantity: a.QTY }))
    console.log(totalAmout)
    const amt = totalAmout.reduce((acc, curr) => {
      let amt = acc + parseInt(curr.amout)
      return amt
    }, 0)
    return amt
  }

  return (
    <div className='cart-overlay'>
      <div className='cart'>
        <i className='fa fa-times' onClick={() => setIsCartOpen(false)}></i>
        {cartItems.map((item, index) => {
          return <div className='cart-item' key={index}>
            <img src={`https://www.app.tutorjoes.in/img/food/${item.PIC}`} />
            <div>
              <h4>{item.NAME}</h4>
              <h5>Rs {item.AMT}</h5>
              <span className="remove-item" onClick={() => handleRemove(item)} >remove</span>
            </div>
            <div>
              <i className="fa fa-plus" onClick={() => handleIncrement(item, "increment")}></i>
              <p className="item-amount">
                {item.QTY}
              </p>
              <i className="fa fa-minus" onClick={() => handleIncrement(item, "decrement")}></i>
            </div>
          </div>
        })}
        <h4>Total Amount : Rs.{totalAmoutDisplay()}</h4>
      </div>
    </div>
  )
}

export default CartPage