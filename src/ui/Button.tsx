import { Button as ButtonChakraUI, ButtonProps } from "@chakra-ui/react";

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <ButtonChakraUI
      bgColor="suvap.darkGray"
      color="white"
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
