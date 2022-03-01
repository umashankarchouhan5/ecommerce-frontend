import React from "react";
import Styled from "styled-components";
import { useFilterContext } from "../contexts/filterContext";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const ListView = () => {
  const { filteredProducts: products } = useFilterContext();

  return (
    <div className="container">
      <Wrapper className="d-flex flex-column align-items-center  justify-content-center">
        {products.map((product) => {
          const { image, _id, name, price, description } = product;

          return (
            <div className="mb-4 product-container   " key={_id}>
              <img src={image} alt={name} className="" />
              <div className="d-flex justify-content-between text-danger p-2">
                <h4 className="text-capitalize">{name}</h4>
                <h5 className="text-danger">{formatPrice(price)}</h5>
              </div>

              <p className="p-2">{description.slice(0, 150)}.........</p>

              <div className="d-flex me-3 align-items-center justify-content-center p-2">
                <Link className="btn btn-danger mb-2" to={`/products/${_id}`}>
                  More Info
                </Link>
              </div>
            </div>
          );
        })}
      </Wrapper>
    </div>
  );
};

const Wrapper = Styled.div`
 .product-container{
   max-width:500px;
   background:#ECB365;
 }
 img{
   max-height: 300px;
   width: 100%;
 }
`;

export default ListView;
