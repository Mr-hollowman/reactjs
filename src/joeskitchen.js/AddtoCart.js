import emptyCart from "./empty-cart2.gif"
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
        return ite.ID === item.ID && ite.QTY !== 0 ? { ...ite, QTY: ite.QTY -= 1 } : ite
      })
    }
    newCart = newCart.filter(ite => ite.QTY !== 0)
    setCartItems(newCart);
  }

  const handleRemove = (item) => {
    const newCart = cartItems.filter((ite) => ite.ID !== item.ID)
    setCartItems(newCart)
  }
  const totalAmoutDisplay = () => {
    return cartItems.reduce((acc, curr) => acc + (parseInt(curr.AMT) * parseInt(curr.QTY)), 0)
  }

  return (
    <div className='cart-overlay'>
      <div className='cart'>
        <i className='fa fa-times cart-close-icon' onClick={() => setIsCartOpen(false)}></i>
        {cartItems.map((item, index) => {
          return <div className='cart-item' key={index}>
            <img src={`https://www.app.tutorjoes.in/img/food/${item.PIC}`} alt={"food"} />
            <div>
              <h4>{item.NAME}</h4>
              <h5>Rs {item.AMT}</h5>
              <h5>{(parseInt(item.AMT) * parseInt(item.QTY))}</h5>
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
        {totalAmoutDisplay() !== 0 && <h4>Total Amount : Rs.{totalAmoutDisplay()}</h4>}
        {totalAmoutDisplay() === 0 && <img className="empty-cart" src={emptyCart} alt="cart is empty"/>}
      </div>
    </div>
  )
}

export default CartPage