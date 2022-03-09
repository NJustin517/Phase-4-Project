import React, { useEffect, useState } from "react";

function ItemCard({ item: { name, price, description, image_url } }) {
  console.log(image_url);
  return (
    <div className="card">
      <img src={image_url} alt="Avatar" style={{ width: "100%" }}></img>
      <div className="container">
        <h4>
          <span>
            <b>{name}</b>
            <br></br>
            <b>${price}.00</b>
          </span>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ItemCard;
