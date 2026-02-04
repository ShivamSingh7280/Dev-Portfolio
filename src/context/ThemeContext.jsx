import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { THEMES, DEFAULT_THEME_NAME } from '../config/theme';
import { applyPaletteToCSS } from '../utils/apply-palette-to-css';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {

  const [themeName, setThemeName] = useState(() => {
    return localStorage.getItem('theme') || DEFAULT_THEME_NAME;
  });

  const theme = THEMES[themeName] || THEMES[DEFAULT_THEME_NAME];

  const setTheme = (name) => {
    if (!THEMES[name]) return;

    setThemeName(name);
    localStorage.setItem('theme', name);
  };

  const toggleTheme = () => {
    const themeNames = Object.keys(THEMES);
    const currentIndex = themeNames.indexOf(themeName);
    const nextIndex = (currentIndex + 1) % themeNames.length;

    setTheme(themeNames[nextIndex]);
  };

  useEffect(() => {
    if (theme?.palette) {
      applyPaletteToCSS(theme.palette);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,               
        themeName,           
        setTheme,            
        toggleTheme,         
        availableThemes: Object.keys(THEMES),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
