import type { Meta, StoryObj } from '@storybook/react';
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
        src: '/images/rhodri-profile.svg',
        alt: 'Rhodri Mativo',
        size: 180,
    },
};

export const Small: Story = {
    args: {
        src: '/images/rhodri-profile.svg',
        alt: 'Rhodri Mativo',
        size: 120,
    },
};

export const Large: Story = {
    args: {
        src: '/images/rhodri-profile.svg',
        alt: 'Rhodri Mativo',
        size: 240,
    },
};

export const CustomImage: Story = {
    args: {
        src: 'https://via.placeholder.com/180x180/8aadf4/1e1e2e?text=R',
        alt: 'Custom Profile Image',
        size: 180,
    },
};
