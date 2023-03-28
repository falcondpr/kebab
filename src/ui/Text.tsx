import {
  Text as TextChakraUI,
  useColorMode,
  type TextProps,
} from "@chakra-ui/react";

export default function Text({ children, ...rest }: TextProps) {
  const { colorMode } = useColorMode();

  return (
    <TextChakraUI color="suvap.darkGray" {...rest}>
      {children}
    </TextChakraUI>
  );
}
