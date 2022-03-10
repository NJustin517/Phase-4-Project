function CartCard({ item }) {
  // function handleDeleteClick() {
  //   fetch(`/carts/${cart.id}`, {
  //     method: "DELETE",
  //   }).then((res) => {
  //     if (res.ok) {
  //       console.log(res);
  //     } else {
  //       res.json().then(console.log);
  //     }
  //   });
  // }

  return (
    <>
      <div id="container">
        <div class="product-details">
          <h1>{item.name}</h1>

          <p class="information">{item.description}</p>

          <div class="control">
            <button class="btn">
              <span class="price">${item.price}.00</span>
              <span class="shopping-cart">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              <span class="buy">Remove</span>
            </button>
          </div>
        </div>

        <div class="product-image">
          <img src={item.image_url} alt=""></img>

          {/* <div class="info">
            <h2> Description</h2>
            <ul>
              <li>
                <strong>Height : </strong>5 Ft{" "}
              </li>
              <li>
                <strong>Shade : </strong>Olive green
              </li>
              <li>
                <strong>Decoration: </strong>balls and bells
              </li>
              <li>
                <strong>Material: </strong>Eco-Friendly
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default CartCard;
