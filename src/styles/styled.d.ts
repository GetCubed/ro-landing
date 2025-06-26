import 'styled-components';

interface ThemeColors {
  base: string;
  mantle: string;
  crust: string;
  text: string;
  subtext1: string;
  subtext0: string;
  surface2: string;
  surface1: string;
  surface0: string;
  overlay2: string;
  overlay1: string;
  overlay0: string;
  blue: string;
  lavender: string;
  sapphire: string;
  sky: string;
  teal: string;
  green: string;
  yellow: string;
  peach: string;
  maroon: string;
  red: string;
  mauve: string;
  pink: string;
  flamingo: string;
  rosewater: string;
}

interface ThemeSemantic {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
}

interface ThemeFonts {
  body: string;
  heading: string;
  mono: string;
}

interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
}

interface ThemeBorderRadius {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}

interface ThemeShadows {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

interface ThemeBreakpoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

interface CatppuccinTheme {
  colors: ThemeColors;
  semantic: ThemeSemantic;
  fonts: ThemeFonts;
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
  shadows: ThemeShadows;
  breakpoints: ThemeBreakpoints;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends CatppuccinTheme { }
}
