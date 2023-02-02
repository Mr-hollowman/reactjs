import Slider from './joeskitchen.js/Slider'
import Navbar from './joeskitchen.js/Navbar'
import MenuItem from './joeskitchen.js/MenuItem'
import Products from './joeskitchen.js/Products'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import { useState } from 'react'

// import Parent from './Parent'
// import Child from './Child'
export default function App() {
  const [cartItems, setCartItems] = useState([])

  console.log(cartItems,"cart items");
return (
    <div>
        <Navbar/>
        <Slider/>
        <MenuItem />
        <Routes>
          <Route path="/" element={<></>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/products/:id" element={<Products setCartItems={setCartItems} cartItems={cartItems} />}/>
        </Routes>
        
        {/* <Parent/>
        <Child/> */}
        
    </div>
  )
}
