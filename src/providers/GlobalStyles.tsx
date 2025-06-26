'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.semantic.background};
    color: ${({ theme }) => theme.semantic.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
    line-height: 1.2;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  h4 {
    font-size: 1.25rem;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  h5 {
    font-size: 1.125rem;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  h6 {
    font-size: 1rem;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    color: ${({ theme }) => theme.semantic.primary};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.sapphire};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.2s ease-in-out;

    &:focus {
      outline: 2px solid ${({ theme }) => theme.semantic.primary};
      outline-offset: 2px;
    }
  }

  input, textarea, select {
    font-family: inherit;
    border: 1px solid ${({ theme }) => theme.semantic.border};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => theme.spacing.sm};
    background-color: ${({ theme }) => theme.semantic.surface};
    color: ${({ theme }) => theme.semantic.text};
    transition: border-color 0.2s ease-in-out;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.semantic.primary};
    }
  }

  code {
    font-family: ${({ theme }) => theme.fonts.mono};
    background-color: ${({ theme }) => theme.semantic.surface};
    padding: ${({ theme }) => theme.spacing.xs};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: 0.875rem;
  }

  pre {
    font-family: ${({ theme }) => theme.fonts.mono};
    background-color: ${({ theme }) => theme.semantic.surface};
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    overflow-x: auto;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.semantic.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.semantic.border};
    border-radius: ${({ theme }) => theme.borderRadius.sm};

    &:hover {
      background: ${({ theme }) => theme.colors.surface1};
    }
  }

  /* Firefox scrollbar */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.semantic.border} ${({ theme }) => theme.semantic.surface};
  }
`;

export default GlobalStyles;
