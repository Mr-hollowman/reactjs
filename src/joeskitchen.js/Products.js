import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function Products({ setCartItems, cartItems }) {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [isPending, setIsPending] = useState(true);
  const [AddCart, setAddCart] = useState([])

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


  const AddtoCart = (ID) => {
    console.log(ID, "items from cart");

  }


  return (

    <div className="products">
      {isPending === true ? <h3 id="txtFoodType"> Loading...</h3> : <h3 id="txtFoodType">{id}</h3>}
      <div className="products-container">
        {products.filter(products => id === undefined ? products : id === "Latest" ? products.LATEST === "Yes" : id === "Favourite" ? products.fav : products.FTYPE === id).map((e) => {
          return <div key={e.ID} className="product">
            <div className="img-container">
              <img src={`https://www.app.tutorjoes.in/img/food/${e.PIC}`} alt="{e.NAME}" className="product-img" />
            </div>
            <h3>{e.NAME}</h3>
            <h4>{e.SHOP}</h4>
            <h5><span>{e.FTYPE}</span> Rs.{e.AMT}</h5>
            <button className="btn-item" onClick={() => { AddtoCart(e) }} ><i className="fa fa-shopping-cart" ></i>
              {
                cartItems.length === 0 ? "add to cart" : cartItems.map((item) => {
                  return item.ID === e.ID ? "In a cart" : "add to cart"
                })
                //  e.cart === true ? "in a cart" : "add to cart"
              }
            </button>
            <p className='btn-fav' onClick={() => handleFavourite(e.ID)}>
              {e.fav === true ? <i className="fa fa-heart" style={{ color: "red" }}></i> : <i class="fa fa-heart"></i>}</p>
          </div>
        })}
      </div>
      <br />
      <hr />

    </div>
  )
}
