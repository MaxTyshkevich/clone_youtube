import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    text: {
      primary: '#ffffff',
      secondary: '#FC1503',
    },
    background: {
      default: '#000',
    },
  },
  components: {
    /*     MuiAppBar: {
      styleOverrides: {
        root: {
          p: 1,
          background: '#000000',
        },
      },
    },  */
    MuiIconButton: {
      variants: [
        {
          props: { variant: 'selected' },
          style: {
            color: 'white',
            opacity: '1',
          },
        },
      ],
      styleOverrides: {
        root: ({ ownerState }) => {
          return {
            color: 'red',
            opacity: '0.8',
            '&:hover': {
              borderRadius: 2,
            },
          };
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#1E1E1E',
        },
      },
    },
  },
});

/* 
 MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            borderRadius: 2,
          },
        },
      },
    },

*/

/* 
MuiIconButton: {
      styleOverrides: {
        root: ({ ownerState }) => {
          return {
            color: ownerState.variant === 'selected' ? 'white' : 'red',
            opacity: ownerState.variant === 'selected' ? '1' : '0.8',
            '&:hover': {
              borderRadius: 2,
            },
          };
        },
      },
    },

*/
