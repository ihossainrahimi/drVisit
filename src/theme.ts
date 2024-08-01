import { createTheme } from '@mui/material';

import { colorPalette } from './constants/colorPalette';

export const applicationTheme = (prefersDarkMode: boolean) => {
  const background = prefersDarkMode ? colorPalette.dark.background : colorPalette.light.background;
  const foreground = prefersDarkMode ? colorPalette.dark.foreground : colorPalette.light.foreground;
  return createTheme({
    palette: {
      background: {
        default: background,
        paper: background
      },
      mode: prefersDarkMode ? 'dark' : 'light',
      primary: {
        contrastText: colorPalette.light.foreground,
        main: colorPalette.main
      },
      secondary: {
        contrastText: colorPalette.light.foreground,
        main: colorPalette.secondary
      }
    },
    direction: 'rtl',
    typography: {
      allVariants: {
        color: foreground,
        fontFamily: 'Croissant One'
      },
      body1: {
        fontFamily: 'serif',
        fontSize: '1.5rem',
        lineHeight: 2
      }
    }
  });
};
