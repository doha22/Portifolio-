import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome , BsInfoCircle , MdWork, GrProjects } from "react-icons/all"
import skills from '../images/skills.png'

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -100],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <li><a href="/" onClick={props.handleNavbar}><AiOutlineHome /></a></li>
          <li><a href="/about" onClick={props.handleNavbar}><BsInfoCircle /></a></li>
          <li><a href="/work" onClick={props.handleNavbar}><MdWork /></a></li>
          <li><a href="/skills" onClick={props.handleNavbar}>
          <img src={skills} className="social_logos"></img>

              </a></li>
          <li><a href="/Projects" onClick={props.handleNavbar}><GrProjects/></a></li>

        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  position: relative;
  
height:20%;
  right: 120px;
  top:170px;
`;

const NavLinks = styled.ul`
  list-style-type: none;
   padding: 20px;
  
  & li {
    transition: all 300ms linear 0s;
  }
  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #797f82db;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;