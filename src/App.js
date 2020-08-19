import React from 'react';
import './App.css';
import Content from './route/Content';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  );
}

export default App;
