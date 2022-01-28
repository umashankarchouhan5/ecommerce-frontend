import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="fluid-container bg-danger height-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-1 fw-bolder">Error:404</h1>
        <h1 className="display-1 fw-bolder">Page not Found</h1>
        <div>
          <Link to="/" className="btn btn-success">
            Back to Homepage
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = Styled.div`
.fluid-container{
  min-height: 90vh;
}
`;

export default ErrorPage;
