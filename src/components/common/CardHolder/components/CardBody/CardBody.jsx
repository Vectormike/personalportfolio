import React from 'react';

import { Wrapper } from './styles';

const CardBody = ({ image, title }) => (
  <Wrapper>
    <img src={image.childImageSharp.src} alt={title} />{' '}
  </Wrapper>
);

export default CardBody;
