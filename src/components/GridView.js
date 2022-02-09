import React from "react";
import { useFilterContext } from "../contexts/filterContext";
import Styled from "styled-components";
import Product from "./Product";
const GridView = () => {
  const { allProducts: products, filteredProducts } = useFilterContext();
  console.log(products);

  return (
    <Wrapper className="d-flex flex-wrap">
      {products.map((product) => {
        return <Product {...product} className="product" key={product.id} />;
      })}
    </Wrapper>
  );
};

const Wrapper = Styled.div`
  
  gap:1rem;
  .product-wrapper{
    width: 200px;
    
  }

  
  
`;

export default GridView;
