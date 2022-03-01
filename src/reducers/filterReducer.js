import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
      gridView: true,
      filters: { ...state.filters, maxPrice, price: maxPrice },
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, gridView: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, gridView: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    let { sort, filteredProducts } = state;
    if (sort === "price-ascending") {
      let tempProducts = [...filteredProducts];
      tempProducts.sort((a, b) => a.price - b.price);
      return {
        ...state,
        filteredProducts: [...tempProducts],
      };
    }

    if (sort === "price-descending") {
      let tempProducts = [...filteredProducts];
      tempProducts.sort((a, b) => b.price - a.price);
      return {
        ...state,
        filteredProducts: [...tempProducts],
      };
    }

    if (sort === "name-ascending") {
      let tempProducts = [...filteredProducts];
      tempProducts.sort((a, b) => a.name.localeCompare(b.name));
      return {
        ...state,
        filteredProducts: [...tempProducts],
      };
    }
    if (sort === "name-descending") {
      let tempProducts = [...filteredProducts];
      tempProducts.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        filteredProducts: [...tempProducts],
      };
    }
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { allProducts } = state;
    const { text, category, price, shipping, color, company } = state.filters;
    let tempProducts = [...allProducts];

    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    if (category && category !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.category.toLowerCase().includes(category);
      });
    }

    if (company && company !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.company.toLowerCase().includes(company);
      });
    }

    if (color && color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.flat().includes(color);
      });
    }

    if (shipping) {
      tempProducts = tempProducts.filter((product) => {
        return product.freeShipping === true;
      });
    }
    if (price >= 0) {
      tempProducts = tempProducts.filter((product) => {
        return product.price <= price;
      });
    }

    return { ...state, filteredProducts: tempProducts };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",

        shipping: false,
      },
    };
  }
};

export default filterReducer;
