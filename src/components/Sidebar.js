import React from "react";
import Styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/walmart.svg";

function Sidebar() {
  const isOpen = false;
  return (
    <Wrapper>
      <aside className={`${isOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <header className="header">
          <img src={logo} className="logo" />
          <button onClick={() => console.log("button clicked")} type="button">
            <MdClose />
          </button>
        </header>

        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/" className="nav-item-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-item-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-item-link">
              Cart
            </Link>
          </li>
        </ul>
      </aside>
    </Wrapper>
  );
}

const Wrapper = Styled.div`
.sidebar{
position:fixed;
height: 100vh;
top:0;
left:0;
width: 100%;
background:white;
font-size:2rem;
display:none;
z-index:23;
}
.logo{
    width: 100px;
    height: 100%;
}
.show-sidebar{
    display: block;
}


.header{
    display: flex;
    justify-content:space-between;

    button{
        background:transparent;
        border: none;
        font-size: 2rem;
        cursor:pointer;
        
    }
}
.nav-links{
display: flex;
justify-content:center;
flex-direction:column;
background:grey;
height: 90vh;

list-style-type:none;
align-items:center;
.nav-item{
       display:block;
   }  

}
.nav-item-link{
    height: 3rem;
    text-decoration:none;
    
    text-decoration:none;
    display: block;
    padding: 0 2rem;
    color:black;
    margin:2rem;

    &:hover{
        border-bottom:2px solid red;
        background:tomato;
    }
    
     
}

`;
export default Sidebar;
