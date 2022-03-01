import React, { useReducer, useContext } from "react";
import reducer from "../reducers/cartReducer";
import {
  ADDTO_CART,
  CLEAR_CART,
  COUNT_CART_TOTAL,
  REMOVE_CART_ITEM,
  TOOGLE_CART_ITEM_AMOUNT,
} from "../actions";

const initialState = {
  cartItems: [],
  shippingFee: 100,
  totalAmount: 0,
};
const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
