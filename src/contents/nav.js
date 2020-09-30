import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import {FiLinkedin } from "react-icons/all"
import prof from "../images/pro2.jpg"


// import Brand from "./Brand";
 import Menu from "./menu";
 import CollapseMenu from "./CollapseMenu";

 import Social from "../components/Social"

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>

      <NavBar style={barAnimation}>
        <FlexContainer>
          {/* <Brand /> */}
          
          <NavLinks style={linkAnimation}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/work">Work Experince</a>
            <a href="/skills">Skills</a>
            <a href="/Projects">Projects</a>

<Social />
          </NavLinks>
          <BurgerWrapper>
            <Menu
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      
   {/* <Contact /> */}
  


      </NavBar>
      
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />


   </>
  
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: relative;
  flex:var(--sidebar-flex) 1 ;

  top: 0;
  left: 0;
  background: linear-gradient(0deg, rgba(194,235,233,1) 0%, rgba(182,95,206,1) 28%, rgba(243,249,191,1) 83%, rgba(236,211,175,0.87718837535014) 100%);
 
  font-size: 1.4rem;
  
`;

const FlexContainer = styled.div`
 
  display: flex;
  margin: auto;
  padding: 50px;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;

  list-style-type: none;
  margin: auto 0;
  display:block;
  & li {
    transition: all 300ms linear 0s;
    list-style-type: none;
  }
  
  & a {
    display :block;
    color: #797f82db;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 25px;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
 
const BurgerWrapper = styled.div`
  margin: auto 0;
  @media (min-width: 769px) {
    display: none;
  }
`;