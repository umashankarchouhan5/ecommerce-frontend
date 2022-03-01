import React, { useState } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { BsCheck } from "react-icons/bs";
import { useCartContext } from "../contexts/cartContext";
import ProductAmount from "./ProductAmount";

const AddToCart = ({ product }) => {
  const { _id: id, colors, inventory } = product;
  const [activeColor, setActiveColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);

  const increment = () => {
    let increase = amount + 1;
    if (increase > inventory) {
      increase = inventory;
    }
    setAmount(increase);
  };

  const decrement = () => {
    let decrease = amount - 1;
    if (decrease < 1) {
      decrease = 1;
    }
    setAmount(decrease);
  };

  return (
    <Wrapper>
      <ProductAmount
        amount={amount}
        increment={increment}
        decrement={decrement}
      />

      <div className="color-container d-flex align-items-center">
        <span>colors:</span>
        {colors.map((color, index) => {
          return (
            <button
              key={index}
              className={`${
                color === activeColor ? "active color-btn" : "color-btn"
              }`}
              style={{ background: color }}
              onClick={() => setActiveColor(color)}
            >
              {color === activeColor ? <BsCheck /> : null}
            </button>
          );
        })}
      </div>

      <Link to="/cart" className="btn btn-danger mt-2">
        Add To Cart
      </Link>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
.color-btn{
    width:1.5rem;
    height:1.5rem;
    border:none;
    color:#fff;
    opacity:0.5;
    display: inline-block;
    background: black;
    border-radius:50%;
    margin:0 10px;
}
.active{
    opacity:1;
}
`;

export default AddToCart;
