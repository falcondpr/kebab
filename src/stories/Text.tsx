import { theme } from '../styles/theme';
import { ChakraProvider, Text as TextChakraUI } from '@chakra-ui/react'

export const Text = () => {
  return (
    <ChakraProvider theme={theme}>
      <TextChakraUI color="suvap.darkGray">Hello</TextChakraUI>
    </ChakraProvider>
  );
}