import React, { useEffect, useRef, useState } from "react";
import Styled from "styled-components";
import { GoTools } from "react-icons/go";
import { GiDiamondHard, GiNotebook } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Wrapper className=" p-4 ">
      <div className="d-md-flex header-text">
        <h3 className="">Customized Furinitures Built only for you</h3>
        <p className="h5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
          similique iure, blanditiis eaque voluptatibus sunt aliquam sequi totam
          minima debitis eos sed alias, beatae at dolor modi nostrum dolores
          esse!
        </p>
      </div>
      <div className="cards  ">
        <div className=" card " data-aos="fade-up">
          <div>
            <GoTools />
          </div>
          <div className="fw-bold">Mission</div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae</p>
        </div>

        <div className=" card " data-aos="flip-up">
          <div>
            <GiDiamondHard />
          </div>
          <div className="fw-bold">Vision</div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae</p>
        </div>

        <div className=" card " data-aos="fade-up">
          <div>
            <GiNotebook />
          </div>
          <div className="fw-bold">History</div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
  margin:100px 0;
  background-color:#406882;
  color:#D3DEDC!important;
 
  .header-text{
      display: flex;
      flex-direction:column;
      gap:2rem;
      @media(min-width:600px){
          flex-direction:row;
      }
  }
.cards{
    display:flex;
    gap:2rem;
    flex-wrap:wrap;
    margin-top:5rem;
    justify-content:center;

}
.card{
    max-width:350px;
    background-color:#6998AB;
    
    display: flex;
    padding: 1rem;
    justify-content:center;
    align-items:center;
    font-size:2rem;
    
    transition: 1s ease-in;
    
    
}


@media(min-width:1000px){
    .cards{
        margin-bottom:-4rem;
        flex-wrap:nowrap;
    }
}
`;
export default Services;
