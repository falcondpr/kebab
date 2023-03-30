import { ButtonProps, ChakraProvider } from "@chakra-ui/react";

import { Button as ButtonUI } from "../ui";
import { theme } from "../styles/theme";
import "./button.css"

interface IButtonProps extends ButtonProps {}

export const Button = ({ children, ...rest }: IButtonProps) => {
  return (
    <ChakraProvider theme={theme}>
      <ButtonUI maxW="xl" {...rest}>{children}</ButtonUI>
    </ChakraProvider>
  );
};
