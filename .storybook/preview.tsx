import React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from '../src/styles/theme';

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <ColorModeScript
        initialColorMode={theme.config.initialColorMode}
      />
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};