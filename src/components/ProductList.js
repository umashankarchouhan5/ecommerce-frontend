import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  if (true) {
    return <ListView />;
  }

  return (
    <div>
      <GridView />
    </div>
  );
};

export default ProductList;
