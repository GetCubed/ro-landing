# Storyboard - Coming Soon Landing Page

A beautiful "Coming Soon" landing page built with Next.js, TypeScript, styled-components, and Storybook, featuring the Catppuccin Macchiato color scheme.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, styled-components
- **Beautiful Design**: Catppuccin Macchiato theme with gradient text and glow effects
- **Social Links**: LinkedIn, GitHub, and external website icons
- **Component Library**: Storybook for component development and documentation
- **Responsive**: Fully responsive design that works on all devices
- **Accessible**: Proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: styled-components (NO Tailwind CSS)
- **Icons**: react-icons
- **Package Manager**: pnpm
- **Component Development**: Storybook
- **Theme**: Catppuccin Macchiato

## 🎨 Design System

The project uses the beautiful Catppuccin Macchiato color palette with semantic color mappings for consistent theming throughout the application.

## 📦 Getting Started

First, install dependencies using pnpm:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the landing page.

## 📖 Storybook

To run Storybook for component development:

```bash
pnpm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view the component library.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main landing page
├── components/            # React components
│   ├── LandingPage.tsx    # Main landing page component
│   ├── SocialIcons.tsx    # Social media icons component
│   └── *.stories.tsx      # Storybook stories
├── providers/             # React providers
│   ├── StyledComponentsProvider.tsx
│   └── GlobalStyles.tsx   # Global CSS styles
└── styles/
    ├── theme.ts           # Catppuccin Macchiato theme
    └── styled.d.ts        # styled-components type definitions
```

## 🎯 Customization

### Updating Social Links

Edit the URLs in `src/app/page.tsx`:

```tsx
<LandingPage
  title="Coming Soon"
  subtitle="Your custom subtitle here"
  linkedinUrl="https://linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-username"
  externalUrl="https://your-website.com"
/>
```

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

## 📱 Responsive Design

The landing page is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
