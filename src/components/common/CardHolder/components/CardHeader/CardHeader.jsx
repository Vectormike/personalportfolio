import React from 'react';
import { Wrapper, Text } from './styles';

const CardHeader = ({ title }) => (
  <Wrapper>
    <Text>{title}</Text>
  </Wrapper>
);

export default CardHeader;
