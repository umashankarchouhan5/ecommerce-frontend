import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GETPRODUCTS_BEGIN,
  GETPRODUCTS_SUCCESS,
  GETPRODUCTS_ERROR,
} from "../actions";

const productsReducer = (state, actions) => {
  if (actions.type === SIDEBAR_OPEN) return { ...state, isSidebarOpen: true };
  if (actions.type === SIDEBAR_CLOSE) return { ...state, isSidebarOpen: false };
  if (actions.type === GETPRODUCTS_BEGIN)
    return { ...state, productsLoading: true };
  if (actions.type === GETPRODUCTS_SUCCESS) {
    const featuredProducts = actions.payload.products.filter(
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

  return state;
  // throw new Error(`no matching ${actions.type}`);
};

export default productsReducer;
