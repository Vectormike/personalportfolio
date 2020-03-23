import React from 'react';
import { Header, Social } from '../../../common';
import { Wrapper, Container } from './styles';

export const ContactForm = () => (
  <Container>
    <Wrapper>
      <Header title="Contact me" subtitle="If you want to <span>holla</span>, you can find me at:" />
      <Social />
    </Wrapper>
  </Container>
);
