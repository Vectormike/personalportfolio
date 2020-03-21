import React from 'react';

import { Wrapper } from './styles';

const CardBody = ({ image, title }) => (
  <Wrapper>
    <img src={image} alt={title} />{' '}
  </Wrapper>
);

export default CardBody;
