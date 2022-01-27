import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Error,
  Cart,
  Checkout,
  Products,
  SingleProduct,
  PrivateRoute,
} from "./pages";
import { Navbar, Footer, Sidebar } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:id" element={<SingleProduct />}></Route>
        <Route path="/privateroute" element={<PrivateRoute />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  );
}

export default App;
