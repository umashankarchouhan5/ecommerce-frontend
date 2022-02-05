import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { formatPrice } from "../utils/helpers";

const Product = ({ name, price, image,_id:id }) => {
  return (
    <Wrapper className="m-1">
      <div className="image-container">
        <img src={image} alt={name} className="image" />
        <div className="hover-background"></div>
        <Link to={`/products/${id}`} className="image-link">
          <MdSearch />
        </Link>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <h3 className="h6">{name}</h3>
        <h6>{formatPrice(price)}</h6>
      </div>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
  color:#F76E11;  
  .image-container{
      position:relative;
      
  }
  .hover-background{
      position: absolute;
      top:0;
      bottom:0;
      right:0;
      left:0;
      background:rgba(0,0,0,0.4);
      opacity:0;
  }

  .image-link{
      position: absolute;
      top:50%;
      left:50%;
      color:#F76E11;
      font-size:3rem;
      transform:translate(-50%,-50%);
      display:none;
      
     
  }  

  .image-container:hover .hover-background {
      
      opacity:1;
  }

  .image-container:hover .image-link{
      display:block;
  }
  .image{
      height:100%;
      width:100%;
      
      background-size:cover;
  }

`;

export default Product;
