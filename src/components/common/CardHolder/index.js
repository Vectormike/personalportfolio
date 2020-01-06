import React from 'react';
import CardHeader from './components/CardHeader/CardHeader';
import CardBody from './components/CardBody/CardBody';
import CardFooter from './components/CardFooter/CardFooter';
import { Wrapper, StyledCard } from './styles';

export const CardHolder = () => (
  <Wrapper>
    <StyledCard>
      <CardHeader />
      <CardBody />
      <CardFooter />
    </StyledCard>
  </Wrapper>
);
