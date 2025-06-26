'use client';

import React from 'react';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.semantic.background} 0%,
    ${({ theme }) => theme.colors.mantle} 100%
  );
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.semantic.primary} 0%,
    ${({ theme }) => theme.semantic.secondary} 50%,
    ${({ theme }) => theme.semantic.accent} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(138, 173, 244, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.semantic.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.125rem;
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(138, 173, 244, 0.1) 0%,
    rgba(198, 160, 246, 0.05) 30%,
    rgba(145, 215, 227, 0.02) 60%,
    transparent 80%
  );
  border-radius: 50%;
  pointer-events: none;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 400px;
    height: 400px;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

interface LandingPageProps {
  title?: string;
  subtitle?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  externalUrl?: string;
}

export default function LandingPage({
  title = 'Coming Soon',
  subtitle = 'Something amazing is being crafted. Stay tuned for updates.',
  linkedinUrl,
  githubUrl,
  externalUrl,
}: LandingPageProps) {
  return (
    <Container>
      <GlowEffect />
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <SocialIcons
          linkedinUrl={linkedinUrl}
          githubUrl={githubUrl}
          externalUrl={externalUrl}
        />
      </Content>
    </Container>
  );
}
