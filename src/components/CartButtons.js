import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contexts/productsContext";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  return (
    <Wrapper className="cart-buttons-wrapper">
      <li>
        <Link to="/" onClick={closeSidebar}>
          <MdShoppingBasket />
          <span className="shopping_power">15</span>
        </Link>
      </li>
      <li>
        <Link to="/" onClick={closeSidebar}>
          <span className="login_text">Login</span> <FaUser />
        </Link>
      </li>
    </Wrapper>
  );
};

const Wrapper = Styled.ul`
  display: flex;
  gap:2rem;
  list-style-type:none;
  width:30%;
  height: 100%;
  align-items:center;
  a{
      display: flex;
      position: relative;
      align-items:center;
      font-size: 2rem;
      text-decoration:none;
      color:black;
      .shopping_power{
        position: absolute;
        top:-10px;
        font-size:1rem;
        padding: 0.1rem;
        background: red;
        border-radius:50%;
        right:-15px;
        padding: 2px;
        color:white;
      } 

      .login_text{
          font-size:1.5rem;
          display: inline-block;
          
      }
  }
`;

export default CartButtons;
