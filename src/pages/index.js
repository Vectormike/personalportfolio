import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Github, Projects } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Github />
    <Skills />
    <Contact />
  </Layout>
);
