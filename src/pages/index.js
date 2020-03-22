import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Github, Projects, OpenSource } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Github />
    <OpenSource />
    <Skills />
  </Layout>
);
