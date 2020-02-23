import React from 'react';
import CardHeader from './components/CardHeader/CardHeader';
import CardBody from './components/CardBody/CardBody';
import CardFooter from './components/CardFooter/CardFooter';
import { Wrapper, StyledCard } from './styles';

export const CardHolder = ({ title, image, link, description }) => (
  <Wrapper as="a" href={link}>
    <StyledCard>
      <CardHeader title={title} />
      <CardBody title={title} link={link} image={image} />
      <CardFooter description={description} />
    </StyledCard>
  </Wrapper>
);
