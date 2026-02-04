// utils/applyPaletteToCSS.js
export const applyPaletteToCSS = (palette = {}) => {
  const root = document.documentElement;

  const setVar = (key, value) => {
    if (value !== undefined) {
      root.style.setProperty(key, value);
    }
  };

  // Backgrounds
  setVar('--bg-primary', palette.background?.default);
  setVar('--bg-secondary', palette.background?.paper);

  // Text
  setVar('--text-primary', palette.text?.primary);
  setVar('--text-secondary', palette.text?.secondary);

  // Borders / dividers
  setVar('--border-primary', palette.divider);

  // Header
  setVar('--header-bg', palette.header?.bg);

  // Primary accent colors
  setVar('--accent-color', palette.primary?.main);
  setVar('--accent-light', palette.primary?.light);
  setVar('--accent-dark', palette.primary?.dark);

  // Secondary color
  setVar('--secondary-color', palette.secondary?.main);

  // Status colors
  setVar('--success-color', palette.success?.main);
  setVar('--warning-color', palette.warning?.main);
  setVar('--error-color', palette.error?.main);
  setVar('--info-color', palette.info?.main);

  // Scrollbar
  setVar('--scrollbar-thumb', palette.primary?.main);

  // Button styles
  setVar('--button-primary', palette.button?.primary);
  setVar('--button-primary-hover', palette.button?.primaryHover);
  setVar('--button-ghost-border', palette.button?.ghostBorder);
};
