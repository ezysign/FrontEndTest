import React from 'react';
import theme from '../@ui/theme';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

export function renderWithStyledTheme(
  component,
  renderFunction = render
) {
  return {
    ...renderFunction(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
  };
}
