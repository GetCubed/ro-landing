import type { Meta, StoryObj } from '@storybook/nextjs';
import { ThemeProvider } from 'styled-components';
import { catppuccinMacchiato } from '../styles/theme';
import GlobalStyles from '../providers/GlobalStyles';
import SocialIcons from './SocialIcons';

const meta: Meta<typeof SocialIcons> = {
  title: 'Components/SocialIcons',
  component: SocialIcons,
  parameters: {
    layout: 'centered',
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
        <div style={{ padding: '2rem' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
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
    linkedinUrl: 'https://linkedin.com/in/example',
    githubUrl: 'https://github.com/example',
    externalUrl: 'https://example.com',
  },
};

export const CustomUrls: Story = {
  args: {
    linkedinUrl: 'https://linkedin.com/in/johndoe',
    githubUrl: 'https://github.com/johndoe',
    externalUrl: 'https://johndoe.dev',
  },
};

export const WithoutUrls: Story = {
  args: {},
};
