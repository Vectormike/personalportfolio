import React from 'react';
import { bounceInLeft, bounceInRight, animated } from 'animate.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, WordsFading } from 'components/common';
// import dev from 'assets/illustrations/dev.svg';
import { config, useSpring } from 'react-spring';
import { Wrapper, IntroWrapper, SmallWrapper, Title, SubTitle, Thumbnail, Button, Flex } from './styles';

export const Intro = () => {
  const TitleSpring = useSpring({
    config: config.wobbly,
    delay: 800,
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(40px)' },
  });

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <SmallWrapper>
          <Title className="animated bounceInRight" title={TitleSpring}>
            Hello{' '}
            <span role="img" aria-label="Smile">
              😊
            </span>{' '}
            , I’m Victor
          </Title>
          <SubTitle className="animated bounceInLeft">
            A <WordsFading /> JavaScript Developer
          </SubTitle>
          <Flex>
            <Button
              className="animated tada animation-iteration-count-infinite"
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
        </SmallWrapper>

        {/* <Thumbnail>
          <img src={dev} alt="Hi, I’m Victor. I’m a Full-Stack JavaScript Developer!" />
        </Thumbnail> */}
      </IntroWrapper>
    </Wrapper>
  );
};
