import type { Meta, StoryObj } from '@storybook/nextjs';
import ProfileImage from './ProfileImage';

const meta: Meta<typeof ProfileImage> = {
    title: 'Components/ProfileImage',
    component: ProfileImage,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A circular profile image with gradient border and hover effects.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        src: {
            control: 'text',
            description: 'The source URL for the image',
        },
        alt: {
            control: 'text',
            description: 'The alt text for the image',
        },
        size: {
            control: 'number',
            description: 'The size of the image in pixels',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: '/images/placeholder-profile.svg',
        alt: 'placeholder-profile',
        size: 180,
    },
};

export const Small: Story = {
    args: {
        src: '/images/placeholder-profile.svg',
        alt: 'placeholder-profile',
        size: 120,
    },
};

export const Large: Story = {
    args: {
        src: '/images/placeholder-profile.svg',
        alt: 'placeholder-profile',
        size: 240,
    },
};