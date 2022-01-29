import { createTheme } from '@mui/material/styles'
import InConsolata from './Fonts/Inconsolata.ttf'

const ThemeGenerator = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#039be5',
      light: '#29b6f6',
      dark: '#0288d1',
      contrastText: '#e1f5fe',
    },
    secondary: {
      main: '#fdd835',
      light: '#ffeb3b',
      dark: '#fbc02d',
      contrastText: '#19335c',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#ff9800',
    },
    error: {
      main: '#ef5350',
      light: '#e57373',
      dark: '#f44336',
    },
    text: {
      primary: '#b3e5fc',
      secondary: '#81d4fa',
    },
    background: {
      default: '#2a3443',
      paper: '#2e4556',
    },
  },
  typography: {
    fontFamily: 'Inconsolata',
    fontWeightLight: 200,
    fontWeightRegular: 200,
    fontWeightMedium: 700,
    fontWeightBold: 1000,
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 900,
    },
    h3: {
      fontWeight: 800,
    },
    h4: {
      fontWeight: 800,
    },
    h5: {
      fontWeight: 800,
      fontSize: '1.6rem',
    },
    subtitle1: {
      fontWeight: 700,
    },
  },

  spacing: 8,
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inconsolata';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Inconsolata'), local('Inconsolata'), url(${InConsolata}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
})

export default ThemeGenerator
