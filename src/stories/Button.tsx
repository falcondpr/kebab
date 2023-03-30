import { ButtonProps, ChakraProvider, ColorModeScript, extendTheme, useColorMode } from "@chakra-ui/react";

import { Button as ButtonUI } from "../ui";
import { theme } from "../styles/theme";
import "./button.css"

interface IButtonProps extends ButtonProps {}

export const Button = ({ children, ...rest }: IButtonProps) => {
  const { colorMode } = useColorMode();
  
  return (
    <ButtonUI
      bgColor={colorMode === "light" ? "suvap.darkGray" : "#fff"}
      color={colorMode === "light" ? "white" : "suvap.darkGray"}
      maxW="xl"
      {...rest}
    >
      {children}
    </ButtonUI>
  );
};
