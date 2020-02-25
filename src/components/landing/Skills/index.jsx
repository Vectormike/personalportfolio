import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'components/common';
import { Wrapper, Title, Grid } from './styles';
import { Skill } from './Skill/index';

export const Skills = () => {
  const {
    skills: { edges },
  } = useStaticQuery(graphql`
    query {
      skills: allSkillsYaml {
        edges {
          node {
            id
            title
            icon
          }
        }
      }
    }
  `);
  return (
    <Wrapper as={Container} id="projects">
      <Title>Top Skills</Title>
      <Grid>
        {edges.map(({ node }) => (
          <Skill key={node.id} title={node.title} icon={node.icon} />
        ))}
      </Grid>
    </Wrapper>
  );
};
