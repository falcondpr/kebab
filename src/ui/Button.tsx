import { Button as ButtonChakraUI, ButtonProps, useColorMode } from "@chakra-ui/react";

export default function Button({ children, ...rest }: ButtonProps) {
  const { colorMode } = useColorMode();

  return (
    <ButtonChakraUI
      bgColor={colorMode === "light" ? "suvap.darkGray" : "#fff"}
      color={colorMode === "light" ? "white" : "suvap.darkGray"}
      h="60px"
      w="full"
      rounded="4px"
      _hover={{ opacity: 0.9 }}
      _focusWithin={{ opacity: 0.7 }}
      _active={{ opacity: 0.9 }}
      {...rest}
    >
      {children}
    </ButtonChakraUI>
  );
}
