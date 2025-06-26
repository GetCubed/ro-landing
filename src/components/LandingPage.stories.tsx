import type { Meta, StoryObj } from '@storybook/nextjs';
import { ThemeProvider } from 'styled-components';
import { catppuccinMacchiato } from '../styles/theme';
import GlobalStyles from '../providers/GlobalStyles';
import LandingPage from './LandingPage';

const meta: Meta<typeof LandingPage> = {
  title: 'Components/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#24273a',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={catppuccinMacchiato}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Main title text',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle text',
    },
    linkedinUrl: {
      control: 'text',
      description: 'LinkedIn profile URL',
    },
    githubUrl: {
      control: 'text',
      description: 'GitHub profile URL',
    },
    externalUrl: {
      control: 'text',
      description: 'External website URL',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Coming Soon',
    subtitle: 'Something amazing is being crafted. Stay tuned for updates.',
    linkedinUrl: 'https://linkedin.com/in/example',
    githubUrl: 'https://github.com/example',
    externalUrl: 'https://example.com',
  },
};

export const CustomContent: Story = {
  args: {
    title: 'Under Construction',
    subtitle: 'We are working hard to bring you something spectacular. Check back soon!',
    linkedinUrl: 'https://linkedin.com/in/johndoe',
    githubUrl: 'https://github.com/johndoe',
    externalUrl: 'https://johndoe.dev',
  },
};

export const LaunchingSoon: Story = {
  args: {
    title: 'Launching Soon',
    subtitle: 'Get ready for an amazing experience. Follow us for updates and be the first to know when we go live.',
    linkedinUrl: 'https://linkedin.com/company/yourcompany',
    githubUrl: 'https://github.com/yourcompany',
    externalUrl: 'https://yourcompany.com',
  },
};

export const PersonalProfile: Story = {
  args: {
    title: 'Rhodri Mativo',
    subtitle: 'Full Stack Developer crafting beautiful digital experiences with Next.js, TypeScript, and modern web technologies.',
    linkedinUrl: 'https://linkedin.com/in/rhodri-mativo',
    githubUrl: 'https://github.com/rhodri-mativo',
    externalUrl: 'https://rhodrimativo.dev',
  },
};
