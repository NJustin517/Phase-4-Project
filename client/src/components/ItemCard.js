import React, { useEffect, useState } from "react";

function ItemCard({ item: { name, price, description, image_url, id }, user, inCart }) {
  const [isInCart, setInCart] = useState(inCart)

  
  function handleclick() {
    fetch("/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        item_id: id
      })
    })
      .then((r) => r.json())
      .then((data) => setInCart(true));
  }





  return (
    <div className="card">
      <img src={image_url} alt="Avatar" style={{ width: "100%" }}></img>
      <div className="container">
        <h4>
          <span>
            <b>{name}</b>
            <br></br>
            <b>${price}.00</b>
            {isInCart ? <p>Added to Cart!</p> : <button style={{marginLeft: "20px"}} onClick={handleclick}>Add to cart</button>}
          </span>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ItemCard;
