import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import dev from 'assets/illustrations/me.jpg';
import { Wrapper, IntroWrapper, Details, Thumbnail, Button, Flex } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h4>Hi, I’m Victor Jonah.</h4>
        <h4>Also known as Vectormike. I'm Full Stack JavaScript Developer!</h4>
        <Flex>
          <Button as={AnchorLink} href="#contact" rel="noopener noreferrer" target="_blank">
            View Resume
          </Button>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Flex>
      </Details>
      <Thumbnail>
        <img src={dev} alt="Hi, I’m Victor. I’m a Full-Stack JavaScript Developer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
