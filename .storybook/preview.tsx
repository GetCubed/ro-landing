import type { Preview } from '@storybook/nextjs';
import React from 'react';
import { ThemeProvider } from '../src/providers/ThemeProvider';
import { catppuccinMacchiato, catppuccinLatte } from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'macchiato',
      values: [
        {
          name: 'macchiato',
          value: catppuccinMacchiato.semantic.background,
        },
        {
          name: 'latte',
          value: catppuccinLatte.semantic.background,
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;