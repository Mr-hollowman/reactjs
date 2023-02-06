import Slider from './joeskitchen.js/Slider'
import Navbar from './joeskitchen.js/Navbar'
import MenuItem from './joeskitchen.js/MenuItem'
import Products from './joeskitchen.js/Products'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CartPage from './joeskitchen.js/AddtoCart'

export default function App() {
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [isCartOpen,setIsCartOpen] = useState(false)


  useEffect(() => {
    response()
  }, []
  )
  const response = () => {
    setTimeout(() => {
      axios("https://www.app.tutorjoes.in/mobile/getAllFood")
        .then(res => {
          setProducts(res.data.items);
          setIsPending(false);
        })
    }, 1000);
  }

  const handleFavourite = (ID) => {
    const newFavourites = products.map(e => {
      return e.ID === ID ? { ...e, fav: !e.fav } : e;
    });
    setProducts(newFavourites)
  }
  
  const checkIsCart = (Item) => {
    const inACart = cartItems.find((item) => item.ID === Item.ID)
    return inACart
  }

  const AddtoCart = (Item) => {
    const inACart = checkIsCart(Item)
    if (!inACart) {
      setCartItems((prev) => ([...prev, {...Item, QTY:1}]))
    }
    else{
      alert("item is already in a cart")
    }
  }
return (
    <div>
        <Navbar setIsCartOpen={setIsCartOpen} cartItems={cartItems} />
        <Slider/>
        <MenuItem />
        <Routes>
          <Route path="/" element={<></>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/products/:id" element={<Products setCartItems={setCartItems} AddtoCart={AddtoCart} checkIsCart = {checkIsCart} cartItems={cartItems} products={products} handleFavourite={handleFavourite} isPending={isPending} />}/>
        </Routes>
        {isCartOpen && <CartPage cartItems={cartItems} setCartItems={setCartItems} setIsCartOpen={setIsCartOpen} />}        
    </div>
  )
}
