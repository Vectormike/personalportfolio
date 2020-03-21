import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CardHolder, Container } from 'components/common/';
import { Wrapper, Grid, Title } from './styles';

export const Projects = () => {
  const {
    projects: { edges },
  } = useStaticQuery(graphql`
    query {
      projects: allProjectsYaml {
        edges {
          node {
            id
            title
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            link
            description
          }
        }
      }
    }
  `);
  return (
    <Wrapper as={Container}>
      <Title>Projects</Title>
      <Grid>
        {edges.map(({ node }) => (
          <CardHolder
            key={node.id}
            title={node.title}
            image={node.image}
            link={node.link}
            description={node.description}
          />
        ))}
      </Grid>
    </Wrapper>
  );
};
