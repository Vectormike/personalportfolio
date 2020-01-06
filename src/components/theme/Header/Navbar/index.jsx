import React from 'react';
import { Link, AnchorLink } from 'gatsby';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Link className="name" as={AnchorLink} to="/">Victor Jonah</Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
