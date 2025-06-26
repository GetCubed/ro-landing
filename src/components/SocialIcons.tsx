'use client';

import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.semantic.surface};
  border: 2px solid ${({ theme }) => theme.semantic.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.semantic.text};
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.semantic.primary};
    border-color: ${({ theme }) => theme.semantic.primary};
    color: ${({ theme }) => theme.semantic.background};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.semantic.primary};
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

interface SocialIconsProps {
  linkedinUrl?: string;
  githubUrl?: string;
  externalUrl?: string;
}

export default function SocialIcons({
  linkedinUrl = 'https://linkedin.com',
  githubUrl = 'https://github.com',
  externalUrl = 'https://example.com',
}: SocialIconsProps) {
  return (
    <IconContainer>
      <IconLink
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin />
      </IconLink>
      
      <IconLink
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
      >
        <FaGithub />
      </IconLink>
      
      <IconLink
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="External Link"
      >
        <FaExternalLinkAlt />
      </IconLink>
    </IconContainer>
  );
}
