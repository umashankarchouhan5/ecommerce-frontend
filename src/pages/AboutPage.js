import React from "react";
import walmart from "../assets/walmart.jpeg";
import Styled from "styled-components";

const About = () => {
  return (
    <Wrapper className="">
      <img src={walmart} alt="walmart" className="walmart-image" />
      <div>
        <h1>Our Story</h1>
        <div className="underline"></div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id suscipit
          corrupti excepturi nisi aspernatur ut iusto? Cupiditate dolores
          praesentium et magnam repellat nam ullam, consequatur voluptates
          veniam minus totam! Nemo quae hic reprehenderit autem ipsa, fugit,
          neque tenetur quas reiciendis quos accusamus maxime laboriosam vel,
          non quasi a consectetur. Nostrum, molestias cupiditate! Aliquid
          eveniet itaque praesentium unde saepe ducimus ipsum iste odio, soluta
          possimus! Alias consequuntur nobis, impedit tempore reprehenderit
          perspiciatis debitis optio quia porro! Repudiandae nam cupiditate
          recusandae dolores corrupti autem quis quos. Pariatur fugiat odit rem
          excepturi libero ullam incidunt at sit alias dolore culpa maxime, in
          distinctio?
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = Styled.div`
.walmart-image{
  width: 100%;
  height: 80vh;

}


`;
export default About;
