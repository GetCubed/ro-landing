'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ProfileImageContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid transparent;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.blue} 0%,
    ${({ theme }) => theme.colors.mauve} 50%,
    ${({ theme }) => theme.colors.teal} 100%
  );
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${({ theme }) => theme.semantic.background};
    z-index: -1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 220px;
    height: 220px;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;
  display: block;
  
  &:hover {
    transform: scale(1.05);
  }
`;

interface ProfileImageProps {
    src?: string;
    alt?: string;
    size?: number;
}

export default function ProfileImage({
    src = "/images/placeholder-profile.svg",
    alt = "/images/placeholder-profile.svg",
    size = 220,
}: ProfileImageProps) {
    return (
        <ProfileImageContainer>
            <StyledImage
                src={src}
                alt={alt}
                width={size}
                height={size}
                priority
            />
        </ProfileImageContainer>
    );
}
