import React, { useEffect, useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Styled from "styled-components";
import { useProductsContext } from "../contexts/productsContext";
import { product_url as url } from "../utils/constants";
import { Error, Loading, Rating, ProductImages } from "../components";
import { formatPrice } from "../utils/helpers";

function SingleProductPage() {
  const { product, fetchProduct, productLoading, productError } =
    useProductsContext();
  const { id } = useParams();

  const navigate = useNavigate();

  useLayoutEffect(() => {
    fetchProduct(url + id);
  }, [id]);

  if (productLoading) {
    return <Loading />;
  }

  if (productError) {
    return <Error />;
  }
  const {
    name,
    price,
    images,
    description,
    averageRating,
    inventory,
    company,
    category,
  } = product;
  return (
    <Wrapper className="container mt-3 d-md-flex justify-content-center align-items-center">
      <ProductImages images={images} name={name} />

      <div className="product-detail">
        <h4 className="text-capitalize">{name}</h4>

        <Rating className="mb-3" />

        <p className="text-small">{description}</p>

        <div className="info  mb-2">
          <h6>Available</h6>
          <h6>{inventory}</h6>
        </div>

        <div className="info mb-2">
          <h6>Brand</h6>
          <h6>{company}</h6>
        </div>

        <div className="info mb-2">
          <h6>Category</h6>
          <h6>{category}</h6>
        </div>

        <h5 className="text-danger">{formatPrice(price)}</h5>
        <hr />

      </div>
    </Wrapper>
  );
}

const Wrapper = Styled.div`
  min-height:90vh;
  gap:2rem;
  color:grey;
  .info{
    display:flex;
    max-width:300px;
    justify-content:space-between;
    margin-bottom:1rem;
  }

`;

export default SingleProductPage;
