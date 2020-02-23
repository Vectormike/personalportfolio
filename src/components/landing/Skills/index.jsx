import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Flex, Thumbnail } from './styles';
import Skill from './Skill/index';

export const Skills = () => (
  <Wrapper id="about">
    <Container>
      <Thumbnail>
        <img src={dev} alt="Hi, I’m Victor. I’m a Full-Stack JavaScript Developer!" />
      </Thumbnail>

      <Flex>
        <Skill />
      </Flex>
      <Button as={AnchorLink} href="#contact">
        Hire me
      </Button>
    </Container>
  </Wrapper>
);
