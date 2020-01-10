import React from 'react';
import { Wrapper, Paragraph } from './styles';

const CardFooter = ({ description }) => (
  <Wrapper>
    <Paragraph>{description}</Paragraph>
  </Wrapper>
);

export default CardFooter;
