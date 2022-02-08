import React from "react";
import Styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <div className="">
        &copy;{new Date().getFullYear()}
        <span className="text-danger">Walmart</span> rights reserved
      </div>
    </Wrapper>
  );
}

const Wrapper = Styled.footer`



background:black;
color:white;
display: flex;


justify-content:center;
align-items:center;
letter-spacing:3px;
min-width: 100%;
min-height:50px;



`;
export default Footer;
