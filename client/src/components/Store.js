import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function Store() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("/items")
      .then((resp) => resp.json())
      .then((receivedItems) => setItems(receivedItems));
  }, []);

  if (items === null) {
    return <h2>Loading...</h2>;
  }

  const cards = items.map((i) => {
    return <ItemCard key={i.id} item={i} />;
  });

  console.log(items);

  return <div className="store">{cards}</div>;
}

export default Store;
