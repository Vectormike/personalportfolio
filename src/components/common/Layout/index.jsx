import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Global } from './styles';
import theme from '../../../utils/theme';

export const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global />
    {children}
  </ThemeProvider>
);
