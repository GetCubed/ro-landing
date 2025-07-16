# Ro Mativo Landing Page

landing page built with Next.js, TypeScript, styled-components, and Storybook, featuring the Catppuccin Macchiato color scheme.

![Front Page](public/front-page.svg)

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, styled-components
- **Beautiful Design**: Catppuccin Macchiato theme with gradient text and glow effects
- **Theme Toggle**: Switch between Catppuccin Latte (light) and Macchiato (dark) themes
- **Social Links**: LinkedIn, GitHub, and external website icons
- **Component Library**: Storybook for component development and documentation
- **Responsive**: Fully responsive design that works on all devices
- **Accessible**: Proper ARIA labels and keyboard navigation


### Customizing Colors

The theme is defined in `src/styles/theme.ts`. You can modify colors while maintaining the Catppuccin Macchiato aesthetic.

## 🧪 Development Commands

- `pnpm dev` - Start Next.js development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm run storybook` - Start Storybook
- `pnpm run build-storybook` - Build Storybook
- `pnpm lint` - Run ESLint

## 🌟 Components

### LandingPage
The main landing page component with gradient title, subtitle, and social icons.

### SocialIcons
Animated social media icons with hover effects for LinkedIn, GitHub, and external links.

### ThemeToggle
Interactive theme toggle button with sun/moon icons for switching between Catppuccin Latte (light) and Macchiato (dark) themes. Includes localStorage persistence for user preference.

## 📱 Responsive Design

The landing page is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
