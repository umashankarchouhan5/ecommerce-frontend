import React from "react";
import ReactDOM from "react-dom";

import { ProductsProvider } from "./contexts/productsContext";
import { FilterProvider } from "./contexts/filterContext";
import { CartProvider } from "./contexts/cartContext";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
