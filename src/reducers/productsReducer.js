import { FaAcquisitionsIncorporated } from "react-icons/fa";
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

const productsReducer = (state, actions) => {
  if (actions.type === SIDEBAR_OPEN) return { ...state, isSidebarOpen: true };
  if (actions.type === SIDEBAR_CLOSE) return { ...state, isSidebarOpen: false };
  if (actions.type === GETPRODUCTS_BEGIN)
    return { ...state, productsLoading: true };
  if (actions.type === GETPRODUCTS_SUCCESS) {
    const featuredProducts = actions.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      products: actions.payload,
      featuredProducts,
      productsLoading: false,
    };
  }
  if (actions.type === GETPRODUCTS_ERROR) {
    return { ...state, productsLoading: false, productsError: true };
  }

  if (actions.type === GETPRODUCT_BEGIN)
    return { ...state, productLoading: true, productError: false };

  if (actions.type === GETPRODUCT_SUCCESS) {
    return {
      ...state,
      productLoading: false,
      productError: false,
      product: actions.payload,
    };
  }

  if (actions.type === GETPRODUCT_ERROR) {
    return { ...state, productLoading: false, productError: true };
  }

  return state;
  // throw new Error(`no matching ${actions.type}`);
};

export default productsReducer;
