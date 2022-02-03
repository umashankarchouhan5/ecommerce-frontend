import React, { useContext, useReducer, useEffect } from "react";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GETPRODUCTS_BEGIN,
  GETPRODUCTS_SUCCESS,
  GETPRODUCTS_ERROR,
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
      console.log(response);
      const products = response.data;
      dispatch({ type: GETPRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GETPRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
