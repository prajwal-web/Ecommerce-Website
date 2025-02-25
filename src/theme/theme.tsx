import { ThemeOptions } from '@mui/material';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#1E3A5F'
    },
    secondary: {
      main: '#6FA3C7'
    },
    background: {
      default: '#f8f7f4'
    },
    text: {
      primary: '#1E3A5F',
      secondary: '#6FA3C7'
    }
  },
  typography: {
    h1: {
      fontFamily: 'Bungee',
      '@media (min-width: 375px)': {
        fontSize: '2.4rem'
      },
      '@media (min-width: 768px)': {
        fontSize: '3.6rem'
      },
      '@media (min-width: 1200px)': {
        fontSize: '4.8rem'
      }
    },
    h2: {
      fontFamily: 'Bungee',
      '@media (min-width: 375px)': {
        fontSize: ' 1.8rem'
      },
      '@media (min-width: 768px)': {
        fontSize: '2.4rem'
      },
      '@media (min-width: 1200px)': {
        fontSize: '3.6rem'
      }
    },
    h3: {
      fontFamily: 'Bungee',
      '@media (min-width: 375px)': {
        fontSize: ' 1.2rem'
      },
      '@media (min-width: 768px)': {
        fontSize: '1.8rem'
      },
      '@media (min-width: 1200px)': {
        fontSize: '2.4rem'
      }
    },
    h6: {
      fontFamily: 'Bungee',
      '@media (min-width: 375px)': {
        fontSize: ' 0.8rem'
      },
      '@media (min-width: 768px)': {
        fontSize: '1rem'
      },
      '@media (min-width: 1200px)': {
        fontSize: '1.2rem'
      }
    },
    h5: {
      fontFamily: 'Bungee',
      '@media (min-width: 375px)': {
        fontSize: ' 0.9rem'
      },
      '@media (min-width: 768px)': {
        fontSize: '1.2rem'
      },
      '@media (min-width: 1200px)': {
        fontSize: '1.4rem'
      }
    },
    h4: {
      fontFamily: 'Bungee',
      '@media (min-width: 375px)': {
        fontSize: ' 1rem'
      },
      '@media (min-width: 768px)': {
        fontSize: '1.4rem'
      },
      '@media (min-width: 1200px)': {
        fontSize: '1.8rem'
      }
    },
    body1: {
      fontFamily: 'Space Grotesk',
      '@media (min-width: 375px)': {
        fontSize: ' 0.9rem'
      },
      '@media (min-width: 768px)': {
        fontSize: '1rem'
      },
      '@media (min-width:1200px)': {
        fontSize: '1.2rem'
      }
    },
    body2: {
      fontFamily: 'Space Grotesk',
      '@media (min-width: 375px)': {
        fontSize: ' 0.75rem'
      },
      '@media (min-width: 768px)': {
        fontSize: '0.85rem'
      },
      '@media (min-width: 1200px)': {
        fontSize: '0.9rem'
      }
    },
    button: {
      fontFamily: 'Space Grotesk'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Space Grotesk',
          textTransform: 'capitalize',
          fontSize: '0.8rem',
          boxShadow: 'none',
          '@media (min-width: 375px)': {
            fontSize: '1rem'
          },
          '@media (min-width: 768px)': {
            fontSize: '1.2rem'
          }
        }
      }
    }
  }
};
