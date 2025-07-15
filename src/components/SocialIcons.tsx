'use client';

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import IconLink from './Icon/IconLink';
import IconContainer from './Icon/IconContainer';
import Image from 'next/image';

interface SocialIconsProps {
  linkedinUrl?: string;
  githubUrl?: string;
  externalUrl?: string;
}

export default function SocialIcons({
  linkedinUrl = 'https://linkedin.com',
  githubUrl = 'https://github.com',
  externalUrl = 'https://bellevue-dashboard.vercel.app',
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
        aria-label="Dashboard Link"

      >

        <Image
          src="/icons/bellevue.svg"
          alt="Bellevue Dashboard"
          width={48}
          height={48}
        />
      </IconLink>
    </IconContainer>
  );
}
