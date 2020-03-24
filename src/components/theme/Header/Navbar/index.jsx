import React from 'react';
// import { animated, rubberBand } from 'animate.css';
import { Link, AnchorLink } from 'gatsby';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Link className="name animated rubberBand" as={AnchorLink} to="/">
      Vectormike
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
