import React from "react";
import Styled from "styled-components";

import { ProductList, Filters, Sort } from "../components";

function ProductsPage() {
  return (
    <div className="container">
      <Wrapper className="d-md-flex justify-content-center   ">
        <Filters className="filters" />
        <div className="w-100">
          <Sort />
          <ProductList />
        </div>
      </Wrapper>
    </div>
  );
}

const Wrapper = Styled.div`


 gap:2rem;
 min-height:90vh;
 margin-top:2rem;
 
 
 
`;

export default ProductsPage;
