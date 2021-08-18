import React, { useState } from "react";

function Item({ name, category }) {

const [inCart, setInCart] = useState(false)
//console.log(inCart)

function handleCartClick(){
  setInCart((inCart) => !inCart)
}

const namedClass = inCart ? "in-cart" : ""

  return (
    <li className={namedClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartClick} className="add">Add to Cart</button>
    </li>
  );
  
}
  
export default Item;
