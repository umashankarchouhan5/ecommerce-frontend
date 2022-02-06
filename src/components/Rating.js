import React from 'react';
import { BsStarFill,BsStarHalf,BsStar } from "react-icons/bs";
import Styled from "styled-components"

function Rating({rating}) {

  
  const tempRating=  Array.from({length:5},(v,i)=>i)
    
const stars=()=>{
  return tempRating.map((item,i)=>{
     return <span key={i}>
    {rating>=i+1?<BsStarFill/>:rating>=i+0.5?<BsStarHalf/>:<BsStar/>}

    </span>
  })
}

  

  

  return <Wrapper>{stars()}</Wrapper>;
}

const Wrapper= Styled.div`
 color:#FFE162;
`

export default Rating;

