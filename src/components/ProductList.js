import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { useFilterContext } from "../contexts/filterContext";
import { BsTypeH1 } from "react-icons/bs";

const ProductList = () => {
  const { gridView, filteredProducts } = useFilterContext();

  if (filteredProducts.length <= 0) {
    return <h3 className="text-center fw-bold">Sorry,No Products Found</h3>;
  }

  if (gridView) {
    return <GridView />;
  }

  return (
    <div>
      <ListView />
    </div>
  );
};

export default ProductList;
