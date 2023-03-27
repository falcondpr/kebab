import { Text as TextChakraUI, useColorMode, type TextProps } from "@chakra-ui/react"

export default function Text({ children, ...rest }: TextProps) {
  const { colorMode } = useColorMode()
  
  return (
    <TextChakraUI {...rest}>
      {children}
    </TextChakraUI>
  );
}
