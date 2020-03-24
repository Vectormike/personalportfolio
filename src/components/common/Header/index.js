import React from 'react';
import styled from 'styled-components';
// import { HeadingWrapper, Title, SubTitle } from './style';

const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  @media only screen and (max-width: 56.25em) {
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 31.25em) {
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  margin-bottom: 1rem;
  color: #127eb1;
  text-transform: uppercase;
  font-weight: 700;
  transition: color 0.2s ease-out;
  @media only screen and (max-width: 37.5em) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 25em) {
    font-size: 1.8rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: #575757;
  font-weight: 400;
  transition: color 0.2s ease-out;
  & span {
    color: #333;
    font-style: italic;
    font-weight: 600;
    transition: color 0.2s ease-out;
  }
  @media only screen and (max-width: 37.5em) {
    font-size: 1.9rem;
  }
  @media only screen and (max-width: 31.25em) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 25em) {
    font-size: 1.7rem;
  }
`;

export const Header = ({ title, subtitle }) => (
  <HeadingWrapper>
    <Title>{title}</Title>
    <SubTitle dangerouslySetInnerHTML={{ __html: subtitle }} />
  </HeadingWrapper>
);
