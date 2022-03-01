import React from "react";
import { useFilterContext } from "../contexts/filterContext";
import { formatPrice, getUniqueValues } from "../utils/helpers";
import Styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      maxPrice,
      minPrice,
      shipping,
      price,
    },
    updateFilters,
    allProducts,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(allProducts, "category");
  const companies = getUniqueValues(allProducts, "company");
  const colors = getUniqueValues(allProducts, "colors");
  console.log(price);
  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-control-group">
          <input
            type="text"
            placeholder="search"
            name="text"
            className="form-control"
            value={text}
            onChange={updateFilters}
          />
        </div>

        <div className="form-control-group">
          <h5 className="mt-2">Category</h5>
          {categories.map((c, i) => {
            return (
              <button
                key={i}
                name="category"
                onClick={updateFilters}
                className={`${
                  c === category ? "btn-category active" : "btn-category"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
        <div className="form-control-group">
          <select
            name="company"
            value={company}
            onChange={updateFilters}
            className="form-select mt-2"
          >
            {companies.map((c, i) => {
              return (
                <option key={i} value={c}>
                  {c}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-control-group mt-3">
          <h5>colors</h5>
          <div className="d-flex mt-2 ">
            {colors.map((c, i) => {
              if (c === "all") {
                return (
                  <button
                    className={`${
                      c === color ? " color-btn-all active" : "color-btn-all"
                    }`}
                    data-color={c}
                    name="color"
                    key={i}
                    onClick={updateFilters}
                  >
                    all
                  </button>
                );
              }

              return (
                <button
                  className="color-btn"
                  data-color={c}
                  name="color"
                  key={i}
                  style={{ background: c }}
                  onClick={updateFilters}
                >
                  {color === c ? <FaCheck /> : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className="form-control-group mt-3">
          <h5>Price</h5>
          <p>{formatPrice(price)}</p>
          <input
            type="range"
            max={maxPrice}
            min={minPrice}
            name="price"
            value={price}
            onChange={updateFilters}
          />
        </div>

        <div className="form-control-group">
          <label htmlFor="shipping" className="me-2">
            Shipping
          </label>
          <input
            type="checkbox"
            name="shipping"
            checked={shipping}
            onChange={updateFilters}
          />
        </div>
      </form>
      <button className="btn btn-danger mt-3" onClick={clearFilters}>
        Clear Filters
      </button>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
 
 
.btn-category{
  display: block;
  border: none;
  background: transparent;
  color:grey;

}
.color-btn-all{
  background:transparent;
  border:none;
  margin-left:2px;
}

.active{
 border-bottom:blue 3px solid;
}

.form-control,.form-select{
  max-width:300px;
}
.color-btn{
  width: 20px;
  border-radius:50%;
  border:none;
  margin-right:1px;
  color:grey;
  opacity:0.8;

}


`;

export default Filters;
