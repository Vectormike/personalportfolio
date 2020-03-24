import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink className="effect-1" href="#about">
      About
    </AnchorLink>
    <AnchorLink smooth className="effect-1" href="#projects">
      Works
    </AnchorLink>
    <AnchorLink className="effect-1" href="#contact">
      Contact
    </AnchorLink>
  </Wrapper>
);

export default NavbarLinks;
