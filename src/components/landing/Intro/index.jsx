import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail, Button, Flex } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h4>Hi, I’m Victor Jonah.</h4>
        <h4>Also known as Vectormike. I'm Full Stack JavaScript Developer, & Dog lover!</h4>
        <h6>I love everything about Software Web development.</h6>
        <Flex>
          <Button
            rel="noopener noreferrer"
            href="https://drive.google.com/open?id=1WyXSyyfyWengLRt-yFr67vZZrc3cV5Hl"
            target="_blank"
          >
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
