import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';
import { ThemeProvider } from '../providers/ThemeProvider';

const meta: Meta<typeof ThemeToggle> = {
    title: 'Components/ThemeToggle',
    component: ThemeToggle,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div style={{ height: '100vh', position: 'relative' }}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBackground: Story = {
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div style={{
                    height: '100vh',
                    position: 'relative',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                }}>
                    <p>Click the toggle button in the top-right corner!</p>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
};
