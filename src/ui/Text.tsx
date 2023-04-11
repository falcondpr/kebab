import {
  Text as TextChakraUI,
  type TextProps,
} from "@chakra-ui/react";

export default function Text({ children, ...rest }: TextProps) {

  return (
    <TextChakraUI color="suvap.darkGray" {...rest}>
      {children}
    </TextChakraUI>
  );
}
