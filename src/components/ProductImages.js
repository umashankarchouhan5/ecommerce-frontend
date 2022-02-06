import React, { useState,useEffect } from "react";
import Styled from "styled-components";

const ProductImages = ({ images=[], name }) => {
  const [activeImage, setActiveImage] = useState( images[0]);

  
  return (
    <Wrapper className="d-flex flex-column justify-content-center align-items-center">
     
      <img src={activeImage} alt={name} className="big-image " />
      
      

      <div className="d-flex mt-3 thumbnail-container justify-content-stretch">
        {images &&
          images.map((image, index) => {
            return (
              <img
                src={image}
                key={index}
                alt="image"
                className={`${
                  image === activeImage ? "thumbnail active" : "thumbnail"
                }`}
                onClick={()=>setActiveImage(images[index])}
              />
            );
          })}
      </div>
    </Wrapper>
  );
};

const Wrapper = Styled.div`

.big-image{
    height:400px;
    width:400px;
    background-size:cover;
    

    @media(max-width:400px){
       
        width:250px;
        height:250px;
    }
}
.thumbnail-container{
    width:100%;
    overflow:hidden;
   // flex-wrap:wrap;
    margin:1rem 0;
    gap:10px;
}
.thumbnail{
    
    width: 18%;
    cursor:pointer;

    @media(max-width:310px){
      width:16%;
    }
}  
.active{
    border:2px solid red;
    

}  

@media(max-width:760px){
        //margin-top:5rem;
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }

    
`;
export default ProductImages;
