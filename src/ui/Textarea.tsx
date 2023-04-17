import {
  Textarea as TextareaChakraUI,
  TextareaProps,
} from "@chakra-ui/react";

export default function Textarea({ ...rest }: TextareaProps) {
  return (
    <TextareaChakraUI
      h="300px"
      border="1px solid"
      borderColor="suvap.border"
      rounded="4px"
      resize="none"
      _placeholder={{ color: "suvap.border" }}
      _focusVisible={{
        borderColor: "suvap.darkGray",
        boxShadow: "0 0 0 1px #bebebe",
      }}
      {...rest}
    />
  );
}
