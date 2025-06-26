'use client';

import React from 'react';
import GlobalStyles from './GlobalStyles';

interface StyledComponentsProviderProps {
  children: React.ReactNode;
}

export default function StyledComponentsProvider({ children }: StyledComponentsProviderProps) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
