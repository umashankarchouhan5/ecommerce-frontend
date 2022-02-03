import React from "react";
import Styled from "styled-components";
import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";
import { useProductsContext } from "../contexts/productsContext";

function FeaturedProducts() {
  const { featuredProducts, productsLoading, productsError } =
    useProductsContext();

  if (productsLoading) {
    return <Loading />;
  }
  if (productsError) {
    return <Error />;
  }

  return (
    <Wrapper className="m-3">
      <header className="d-flex flex-column align-items-center">
        <h3>Featured Products</h3>
        <div className="underline"></div>
      </header>

      <section className="d-md-flex justify-content-center align-items-center">
        {featuredProducts.slice(0, 3).map((product) => {
          const { _id: id } = product;
          return <Product key={id} {...product} />;
        })}
      </section>
    </Wrapper>
  );
}

const Wrapper = Styled.div`


`;

export default FeaturedProducts;
