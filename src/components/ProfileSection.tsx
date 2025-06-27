'use client';

import React from 'react';
import styled from 'styled-components';
import ProfileImage from './ProfileImage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

interface ProfileSectionProps {
    profileImageSrc?: string;
    profileImageAlt?: string;
    profileImageSize?: number;
}

export default function ProfileSection({
    profileImageSrc,
    profileImageAlt,
    profileImageSize,
}: ProfileSectionProps) {
    return (
        <Container>
            <ProfileImage
                {...(profileImageSrc && { src: profileImageSrc })}
                {...(profileImageAlt && { alt: profileImageAlt })}
                {...(profileImageSize && { size: profileImageSize })}
            />
        </Container>
    );
}
