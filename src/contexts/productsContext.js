import React, { useContext, useReducer, useEffect } from "react";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GETPRODUCTS_BEGIN,
  GETPRODUCTS_SUCCESS,
  GETPRODUCTS_ERROR,
  GETPRODUCT_BEGIN,
  GETPRODUCT_SUCCESS,
  GETPRODUCT_ERROR,
} from "../actions";
import reducer from "../reducers/productsReducer";
import { products_url as url } from "../utils/constants";
import axios from "axios";

const initialState = {
  isSidebarOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],

  productLoading: false,
  productError: false,
  product: {},
};
const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GETPRODUCTS_BEGIN });

    try {
      const response = await axios.get(url);

      const products = response.data.products;
      dispatch({ type: GETPRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GETPRODUCTS_ERROR });
    }
  };

  const fetchProduct = async (url) => {
    dispatch({ type: GETPRODUCT_BEGIN });

    try {
      const response = await axios.get(url);
      const product = response.data;
      dispatch({ type: GETPRODUCT_SUCCESS, payload: product });
    } catch (error) {
      dispatch({ type: GETPRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
