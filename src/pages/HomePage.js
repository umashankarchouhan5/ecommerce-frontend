import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Styled from "styled-components";
import { furniture1, furniture2, furniture3 } from "../assets";

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
          <img className="d-block w-100" src={furniture3} alt="Third slide" />
          <Carousel.Caption className="caption">
            <h5>Third furniture</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
img{
  height:40rem;
  background-size:cover;
}
.caption{
  background-color:#7897AB;

}
@media(max-width:500px){
  
}
`;

export default Home;
