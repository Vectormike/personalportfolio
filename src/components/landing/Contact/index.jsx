import React from 'react';
import { Container } from 'components/common';
// import contacts from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import { ContactForm } from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    {/* <Thumbnail>
      <img src={contacts} alt="I’m John and I’m a Backend & Devops engineer!" />
    </Thumbnail> */}
  </Wrapper>
);
