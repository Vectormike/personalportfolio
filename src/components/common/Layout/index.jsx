import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ScrollToTop } from '../scrollToTop';
import { Global } from './styles';
import './fonts.css';
import theme from '../../../utils/theme';

export const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global />
    {children}
    <ScrollToTop />
  </ThemeProvider>
);
