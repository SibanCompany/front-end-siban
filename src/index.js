import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import 'remixicon/fonts/remixicon.css';
import { color } from './styles/theme';
import { GlobalStlye } from './styles/GlobalStyle';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStlye />
    <ThemeProvider theme={color}>
      <Router />
    </ThemeProvider>
  </>
);
