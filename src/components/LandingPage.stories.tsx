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
    profile: {
      control: 'object',
      description: 'Profile configuration object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    profile: {
      title: 'Coming Soon',
      subtitle: 'Something amazing is being crafted. Stay tuned for updates.',
      linkedinUrl: 'https://linkedin.com/in/example',
      githubUrl: 'https://github.com/example',
      externalUrl: 'https://example.com',
      imageSrc: '',
      imageAlt: '',
      defaultSize: 128,
    },
  },
};

export const CustomContent: Story = {
  args: {
    profile: {
      title: 'Under Construction',
      subtitle: 'We are working hard to bring you something spectacular. Check back soon!',
      linkedinUrl: 'https://linkedin.com/in/johndoe',
      githubUrl: 'https://github.com/johndoe',
      externalUrl: 'https://johndoe.dev',
      imageSrc: '',
      imageAlt: '',
      defaultSize: 128,
    },
  },
};

export const LaunchingSoon: Story = {
  args: {
    profile: {
      title: 'Launching Soon',
      subtitle: 'Get ready for an amazing experience. Follow us for updates and be the first to know when we go live.',
      linkedinUrl: 'https://linkedin.com/company/yourcompany',
      githubUrl: 'https://github.com/yourcompany',
      externalUrl: 'https://yourcompany.com',
      imageSrc: '',
      imageAlt: '',
      defaultSize: 128,
    },
  },
};

export const PersonalProfile: Story = {
  args: {
    profile: {
      title: 'Rhodri Mativo',
      subtitle: 'Full Stack Developer crafting beautiful digital experiences with Next.js, TypeScript, and modern web technologies.',
      linkedinUrl: 'https://linkedin.com/in/rhodri-mativo',
      githubUrl: 'https://github.com/rhodri-mativo',
      externalUrl: 'https://bellevue-dashboard.vercel.dev',
      imageSrc: '',
      imageAlt: '',
      defaultSize: 128,
    },
  },
};
