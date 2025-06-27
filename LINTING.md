# Linting and Type Checking Setup

This project is configured with strict linting rules that match Vercel's deployment standards. This ensures that any code that passes locally will also pass in production deployments.

## Configuration

### ESLint Configuration
- **File**: `eslint.config.mjs`
- **Extends**: Next.js core web vitals, TypeScript, and Storybook configurations
- **Strict Rules**: All Next.js warnings are treated as errors
- **TypeScript**: Strict TypeScript rules with proper plugin configuration

### TypeScript Configuration
- **File**: `tsconfig.json`
- **Strict Mode**: Enabled with additional strict options
- **Key Settings**:
  - `noImplicitAny: true`
  - `noImplicitReturns: true`
  - `noUnusedLocals: true`
  - `noUnusedParameters: true`
  - `exactOptionalPropertyTypes: true`
  - `noFallthroughCasesInSwitch: true`

## Available Scripts

### Linting
```bash
# Standard linting (allows warnings)
pnpm run lint

# Strict linting (treats warnings as errors, matches Vercel)
pnpm run lint:strict

# Fix auto-fixable linting issues
pnpm run lint:fix
```

### Type Checking
```bash
# Type check without emitting files
pnpm run type-check
```

### Combined Checks
```bash
# Run both strict linting and type checking
pnpm run check-all
```

### Build
```bash
# Build with strict linting (matches Vercel deployment)
pnpm run build
```

## Key Rules Enforced

### Next.js Specific
- No HTML links for pages (use Next.js Link)
- No img elements (use Next.js Image)
- Proper Google Font optimization
- No sync scripts in head
- Document structure validation

### TypeScript
- No unused variables
- No explicit any (warning)
- Prefer const declarations
- No var declarations
- Exact optional property types

### Code Quality
- No console.log statements (warning)
- No debugger statements (error)
- Strict equality checks (===)
- No duplicate imports
- Proper React hooks usage

## Development Workflow

1. **Before committing**: Run `pnpm run check-all` to ensure all code passes strict checks
2. **During development**: Use `pnpm run lint:fix` to auto-fix issues
3. **CI/CD**: The build process (`pnpm run build`) includes strict linting that will fail on any warnings

## Vercel Deployment Matching

This configuration matches Vercel's deployment standards:
- Zero warnings allowed during build
- Strict TypeScript checking
- All Next.js best practices enforced
- Production-ready code quality standards

If your code passes `pnpm run build` locally, it will pass Vercel's deployment checks.
