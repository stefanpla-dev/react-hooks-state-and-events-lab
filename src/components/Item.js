import React from "react";
import {useState} from "react";

function Item({ name, category }) {
const [cartStatus, setCartStatus] = useState(false)
const cartClass = cartStatus ? "in-cart" : "";
const buttonClass = cartStatus ? "Remove From Cart" : "Add to Cart";

function handleClick() {
  setCartStatus(!cartStatus)
}

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonClass}</button>
    </li>
  );
}

export default Item;
