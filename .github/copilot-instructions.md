<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# rhodri-app Project - Copilot Instructions

This is a Next.js project with TypeScript, styled-components, and Storybook.

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: styled-components (NO Tailwind CSS)
- **Icons**: react-icons
- **Package Manager**: pnpm
- **Component Development**: Storybook
- **Shell**: zsh (when referencing terminal commands)

## Design System
- **Theme**: Catppuccin Macchiato color scheme
- **Colors**: Use the theme colors defined in `src/styles/theme.ts`
- **Typography**: System fonts with focus on readability
- **Components**: Clean, modern design with subtle animations

## Code Style Guidelines
- Use functional components with TypeScript
- Use styled-components for all styling
- Follow the established theme structure
- Use semantic color names from the theme
- Include proper TypeScript types
- Use the theme provider for consistent styling

## File Structure
- Components: `src/components/`
- Styles: `src/styles/`
- Providers: `src/providers/`
- Stories: `src/components/*.stories.tsx`

## Storybook
- All components should have corresponding stories
- Use the theme provider decorator in stories
- Include proper controls and documentation
- Use Catppuccin background for dark theme consistency

## Development Commands
- `pnpm dev` - Start Next.js development server
- `pnpm run storybook` - Start Storybook
- `pnpm build` - Build for production
- `pnpm run build-storybook` - Build Storybook

When creating new components:
1. Create the component with styled-components
2. Add proper TypeScript interfaces
3. Create a corresponding Storybook story
4. Use the theme colors and spacing consistently
5. Ensure responsive design
6. Add hover/focus states for interactive elements
