export const LIGHT_THEME = {
  name: 'light',
  palette: {
    mode: 'light',
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a202c',
      secondary: '#718096',
    },
    divider: '#e2e8f0',
    primary: {
      main: '#6366f1',  // Indigo - Modern & professional
      light: '#818cf8',
      dark: '#4f46e5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ec4899',  // Pink - Vibrant & eye-catching
      light: '#f472b6',
      dark: '#be185d',
      contrastText: '#ffffff',
    },
    success: {
      main: '#10b981',  // Green - Clean & positive
    },
    warning: {
      main: '#f59e0b',  // Amber - Alert
    },
    error: {
      main: '#ef4444',  // Red - Error
    },
    info: {
      main: '#3b82f6',  // Blue - Info
    },
    header: {
      bg: 'rgba(99, 102, 241, 0.04)',
    },
    button: {
      primary: '#6366f1',
      primaryHover: '#4f46e5',
      ghost: 'transparent',
      ghostBorder: '#e2e8f0',
    },
  },
};

export const DARK_THEME = {
  name: 'dark',
  palette: {
    mode: 'dark',
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
    },
    divider: '#334155',
    primary: {
      main: '#818cf8',  // Indigo - Bright & visible on dark
      light: '#a5b4fc',
      dark: '#6366f1',
      contrastText: '#0f172a',
    },
    secondary: {
      main: '#f472b6',  // Pink - Vibrant on dark
      light: '#fbcfe8',
      dark: '#be185d',
      contrastText: '#0f172a',
    },
    success: {
      main: '#34d399',  // Green - Brighter for dark mode
    },
    warning: {
      main: '#fbbf24',  // Amber - Brighter for dark mode
    },
    error: {
      main: '#f87171',  // Red - Brighter for dark mode
    },
    info: {
      main: '#60a5fa',  // Blue - Brighter for dark mode
    },
    header: {
      bg: 'rgba(129, 140, 248, 0.08)',
    },
    button: {
      primary: '#818cf8',
      primaryHover: '#a5b4fc',
      ghost: 'transparent',
      ghostBorder: '#475569',
    },
  },
};

export const THEMES = {
  light: LIGHT_THEME,
  dark: DARK_THEME,
};

export const DEFAULT_THEME_NAME = 'light';

