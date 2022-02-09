import React from "react";
import Styled from "styled-components";
import { useFilterContext } from "../contexts/filterContext";
import { Link } from "react-router-dom";

const ListView = () => {
  const { allProducts: products, featuredProducts } = useFilterContext();

  return (
    <Wrapper className="d-flex flex-column align-items-center  justify-content-center">
      {products.map((product) => {
        const { image, _id, name, price, description } = product;

        return (
          <div className="mb-4 product-container bg-dark " key={_id}>
            <img src={image} alt={name} className="" />
            <h4>{name}</h4>
            <h5 className="text-danger">{price}</h5>
            <p className="text-success">{description.slice(0, 150)}.........</p>

            <div className="d-flex me-3 align-items-center justify-content-center">
              <Link className="btn btn-danger" to={`/products/${_id}`}>
                More Info
              </Link>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = Styled.div`
 .product-container{
   max-width:500px;
 }
 img{
   max-height: 300px;
   width: 100%;
 }
`;

export default ListView;
