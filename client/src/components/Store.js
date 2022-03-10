import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function Store({ user }) {
  const [items, setItems] = useState(null);
  const [cartItems, setCartItems] = useState(null);

  useEffect(() => {
    fetch("/items")
      .then((resp) => resp.json())
      .then((receivedItems) => setItems(receivedItems));
  }, []);

  useEffect(() => {
    fetch(`/users/${user.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        const cartItems = data.carts.map((c) => {
          return c.item.id
        })
        setCartItems(cartItems)
      });
  }, [items])

  if (items === null || cartItems === null) {
    return <h2>Loading...</h2>;
  }
  const cards = items.map((i) => {
    let inCart = false;
    if (cartItems.length !== 0 && cartItems.includes(i.id)) {
      inCart = true;
    }
    return <ItemCard key={i.id} item={i} user={user} inCart={inCart} />;
  });

  return <div className="store">{cards}</div>;
}

export default Store;
