import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function Products({ checkIsCart, AddtoCart, products, handleFavourite, isPending }) {
  const { id } = useParams();
  let fav = JSON.parse(localStorage.getItem("fav"))
  return (
    <div className="products">
      {isPending === true ? <h3 id="txtFoodType"> Loading...</h3> : <h3 id="txtFoodType">{id}</h3>}
      <div className="products-container">
        {products.filter(products => id === "Favourite" ? fav.includes(products.ID) : id === undefined ? products : id === "Latest" ? products.LATEST === "Yes" : products.FTYPE === id).map((e) => {
          return <div key={e.ID} className="product">
            <div className="img-container">
              <img src={`https://www.app.tutorjoes.in/img/food/${e.PIC}`} alt="{e.NAME}" className="product-img" />
            </div>
            <h3>{e.NAME}</h3>
            <h4>{e.SHOP}</h4>
            <h5><span>{e.FTYPE}</span> Rs.{e.AMT}</h5>
            <button className="btn-item" onClick={() => { AddtoCart(e) }} ><i className="fa fa-shopping-cart" ></i>
              {
                checkIsCart(e) !== undefined ? " In a cart" : " Add to cart"
              }
            </button>
            <p className='btn-fav' onClick={() => handleFavourite(e.ID)}>
              {e.fav === true ? <i className="fa fa-heart" style={{ color: "red" }}></i> : <i className="fa fa-heart"></i>}</p>
          </div>
        })}
      </div>
      <br />
      <hr />

    </div>
  )
}
