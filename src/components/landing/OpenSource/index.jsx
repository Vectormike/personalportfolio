import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import { Wrapper, Title, Grid, Item, Content, Stats } from './styles';

export const OpenSource = () => {
  const {
    github: {
      viewer: {
        repositoriesContributedTo: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositoriesContributedTo(
              last: 100
              orderBy: { field: CREATED_AT, direction: DESC }
              contributionTypes: PULL_REQUEST
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  forkCount
                  stargazers {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Wrapper as={Container} id="projects">
      <Title>Open source projects</Title>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer">
            <Card>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <Stats>
                <div>
                  <img src={starIcon} alt="stars" />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <img src={forkIcon} alt="forks" />
                  <span>{node.forkCount}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
