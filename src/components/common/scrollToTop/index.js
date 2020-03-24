import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll';
import { animated } from 'react-spring';

const StyledWrapper = styled(animated.div)`
  position: fixed;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  margin-right: 1.5rem;
  bottom: 0;
  right: 0;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #127eb1;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(1px);
  }
  @media only screen and (max-width: 56.25em) {
    width: 3rem;
    height: 3rem;
  }
  @media only screen and (max-width: 37.5em) {
    margin-bottom: 2rem;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 1.2rem;
`;

export const ScrollToTop = ({ style }) => (
  <StyledWrapper style={style} onClick={() => scroll.scrollToTop()}>
    <StyledIcon icon={faChevronUp} />
  </StyledWrapper>
);
