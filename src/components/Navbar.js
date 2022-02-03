import { Link } from "react-router-dom";
import Styled from "styled-components";
import { MdMenu } from "react-icons/md";
import logo from "../assets/walmart.svg";
import { useProductsContext } from "../contexts/productsContext";
import CartButtons from "./CartButtons";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  return (
    <Wrapper>
      <img src={logo} className="logo" alt="logo" />

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

        <CartButtons />
      </ul>
      <button className="nav-toogle" onClick={openSidebar}>
        {" "}
        <MdMenu />
      </button>
    </Wrapper>
  );
};

const Wrapper = Styled.nav`
display: flex;
position:fixed;

top:0;
left:0;
z-index:10;
width: 100%;
height:60px;

justify-content:space-between;
align-content:center;

background:grey;
.logo{
    width: 100px;
    
}

.nav-links{
 display:flex;
list-style-type:none;
align-self:center;
width:90vw;
margin:0;
justify-content:space-between;


@media(max-width:700px){
    display:none ;
}

align-items:center;
.nav-item-link{
    text-decoration:none;
    
    color:white;
    display: inline-block;
    padding:0.4rem 1rem;
    transition:0.2s ease-in;

    &:hover{
    border-bottom:5px solid green;
}

}

}
.nav-toogle{
    display: none;
    font-size:2rem;
    cursor:pointer;
    @media(max-width:700px){
        display:block
    }
}
`;
export default Navbar;
