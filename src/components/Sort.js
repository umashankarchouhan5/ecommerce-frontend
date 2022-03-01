import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import Styled from "styled-components";
import { useFilterContext } from "../contexts/filterContext";

const Sort = () => {
  const {
    gridView,
    setListView,
    setGridView,
    sort,
    updateSort,
    filteredProducts: products,
  } = useFilterContext();

  return (
    <Wrapper className="d-flex align-items-center mb-3 ">
      <button
        className={gridView ? "active btn-sort" : "btn-sort"}
        onClick={setGridView}
      >
        <BsFillGridFill />
      </button>
      <button
        className={!gridView ? "active btn-sort" : "btn-sort"}
        onClick={setListView}
      >
        <BsList />
      </button>

      <div className="">{products.length} Products Found</div>

      <hr className="w-50" />
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="d-flex align-items-center ">
          <div className="mx-3">Sort</div>
          <select
            name="sort"
            id="sort"
            className="form-select-sm "
            onChange={updateSort}
            value={sort}
          >
            <option value="price-ascending" name="price-ascending">
              price(low-high)
            </option>
            <option value="price-descending" name="price-descending">
              price(high-low)
            </option>
            <option value="name-ascending" name="name-ascending">
              name(a-z)
            </option>
            <option value="name-descending" name="name-descending">
              name(z-a)
            </option>
          </select>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = Styled.div`

gap: 1rem;
.btn-sort{
  border:none;
  padding:2px 9px;
  border-radius:8px;
  font-size:1.4rem;
  background: transparent;
}

.active{
  background: #000;
  color:#fff;
}

`;

export default Sort;
