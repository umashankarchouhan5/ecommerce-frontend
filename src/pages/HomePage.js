import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Styled from "styled-components";
import { furniture1, furniture2, furniture4 } from "../assets";
import { Services, Contacts, FeaturedProducts } from "../components";

const Home = () => {
  return (
    <Wrapper>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={furniture1} alt="First slide" />
          <Carousel.Caption className="caption">
            <h5>First furniture</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={furniture2} alt="Second slide" />
          <Carousel.Caption className="caption">
            <h5>Second furniture</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={furniture4} alt="Third slide" />
          <Carousel.Caption className="caption">
            <h5>Third furniture</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <FeaturedProducts />
      <Services />
      <Contacts />
    </Wrapper>
  );
};

const Wrapper = Styled.div`

img{
  max-height:40rem;
  background-size:cover;
}
.caption{
  background-color:#7897AB;
  opacity:0.5;
  color:white;
  

}
@media(max-width:600px){
  
}
`;

export default Home;
