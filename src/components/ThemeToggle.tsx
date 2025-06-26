'use client';

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../providers/ThemeProvider';
import { FiSun, FiMoon } from 'react-icons/fi';

const ToggleButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.theme.semantic.surface};
  color: ${props => props.theme.semantic.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  box-shadow: ${props => props.theme.shadows.md};
  border: 2px solid ${props => props.theme.semantic.border};
  z-index: 1000;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
    background: ${props => props.theme.semantic.primary};
    color: ${props => props.theme.semantic.background};
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    top: 1rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(180deg);
  }
`;

export const ThemeToggle: React.FC = () => {
    const { themeName, toggleTheme } = useTheme();

    return (
        <ToggleButton
            onClick={toggleTheme}
            title={`Switch to ${themeName === 'macchiato' ? 'light' : 'dark'} theme`}
            aria-label={`Switch to ${themeName === 'macchiato' ? 'light' : 'dark'} theme`}
        >
            <IconWrapper>
                {themeName === 'macchiato' ? <FiSun /> : <FiMoon />}
            </IconWrapper>
        </ToggleButton>
    );
};
