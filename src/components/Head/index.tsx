'use client';

import 'react-toastify/dist/ReactToastify.css';

import { responsiveFontSizes, ThemeProvider, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { store } from '@/store';
import { applicationTheme } from '@/theme';

import { App } from '../App';

export const Layout = ({ children }: { children: ReactNode }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <Provider store={store}>
      <ThemeProvider theme={responsiveFontSizes(applicationTheme(prefersDarkMode))}>
        <ToastContainer
          position='top-center'
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <App>{children}</App>
      </ThemeProvider>
    </Provider>
  );
};
