import type { Meta, StoryObj } from '@storybook/nextjs';
import ProfileSection from './ProfileSection';

const meta: Meta<typeof ProfileSection> = {
    title: 'Components/ProfileSection',
    component: ProfileSection,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A profile section component that displays a profile image with styling.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        profileImageSrc: {
            control: 'text',
            description: 'The source URL for the profile image',
        },
        profileImageAlt: {
            control: 'text',
            description: 'The alt text for the profile image',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        profileImageSrc: '/images/rhodri-profile.svg',
        profileImageAlt: 'Rhodri Mativo',
    },
};

export const WithCustomImage: Story = {
    args: {
        profileImageSrc: 'https://via.placeholder.com/180x180/8aadf4/1e1e2e?text=R',
        profileImageAlt: 'Custom Profile Image',
    },
};

export const SmallViewport: Story = {
    args: {
        profileImageSrc: '/images/rhodri-profile.svg',
        profileImageAlt: 'Rhodri Mativo',
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
