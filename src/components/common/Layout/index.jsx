import React from 'react';
import { ThemeProvider } from 'styled-components';
// import { Footer } from 'components/theme';
import { Global } from './styles';
import './fonts.css';
import theme from '../../../utils/theme';

export const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global />
    {children}
  </ThemeProvider>
);
