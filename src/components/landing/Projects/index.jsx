import React from 'react';
import { CardHolder, Container } from 'components/common/';
import { Wrapper, Grid, Title, Work } from './styles';

import Project from '../../../../content/projects.yaml';

export const Projects = () => (
  <Wrapper as={Container}>
    <Title>Projects</Title>
    <Work>
      <Grid>
        {Project.map((data, index) => (
          <CardHolder
            key={index}
            title={data.title}
            image={data.image}
            link={data.link}
            description={data.description}
          />
        ))}
      </Grid>
    </Work>
  </Wrapper>
);
