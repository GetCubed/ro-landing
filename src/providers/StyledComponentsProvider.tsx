'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { catppuccinMacchiato } from '../styles/theme';
import GlobalStyles from './GlobalStyles';

interface StyledComponentsProviderProps {
  children: React.ReactNode;
}

export default function StyledComponentsProvider({ children }: StyledComponentsProviderProps) {
  return (
    <ThemeProvider theme={catppuccinMacchiato}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
