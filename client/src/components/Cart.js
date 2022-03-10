import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";

function Cart({ user }) {
  const [currentCart, setCart] = useState(null);


  useEffect(() => {
    fetch(`/users/${user.id}`)
      .then((resp) => resp.json())
      .then((receivedItems) => setCart(receivedItems));
  }, []);
  if (currentCart === null) {
    return <h2>Loading...</h2>;
  }


  const cards = currentCart.carts.map((c) => {
    return <CartCard key={c.id} item={c.item} cart_id={c.id} setCart={setCart} user_id={user.id} />;
  });
  return (
    <div className="cart">
      <h1 className="cartTitle">CART</h1>
      {cards}
      <hr className="totalLine"></hr>
      <span>
        <b className="cartTotal">Total:</b>
        <b className="cartTotal" style={{ marginLeft: "75%" }}>
          ${currentCart.cart_sum}.00
        </b>
      </span>
    </div>
  );
}

export default Cart;
