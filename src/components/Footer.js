import React from "react";
import Styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <h3>&copy;{new Date().getFullYear()}Walmart rights reserved</h3>
    </Wrapper>
  );
}

const Wrapper = Styled.footer`
height:20vh;
background:black;
color:white;
display: flex;
justify-content:center;
align-items:center;
letter-spacing:3px;
`;
export default Footer;
