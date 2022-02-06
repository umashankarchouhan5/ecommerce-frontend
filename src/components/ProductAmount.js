import React, { useState } from "react";
import Styled from "styled-components";

const ProductAmount = ({ amount, increment, decrement }) => {
  return (
    <Wrapper className="d-flex align-items-center">
      <div className="btn" onClick={decrement}>
        -
      </div>
      <div className="fw-bold">{amount}</div>
      <div className="btn" onClick={increment}>
        +
      </div>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
font-size:1.5rem;
.btn{
    font-size:2rem;
    font-weight:bolder;
    
}


`;

export default ProductAmount;
