'use client';

import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import NextLink from 'next/link';
import { forwardRef } from 'react';

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  //@ts-ignore it is ok (https://stackoverflow.com/questions/66226576/using-the-material-ui-link-component-with-the-next-js-link-component/74419666#74419666)
  return <NextLink ref={ref} {...props} />;
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#808080',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour,
      },
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehaviour,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          backgroundColor: '#808080',
          '&:hover': {
            backgroundColor: 'red',
          },
        },
      },
    },
  },
});

// eslint-disable-next-line import/no-default-export
export default theme;
