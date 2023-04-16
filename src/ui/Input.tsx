import { InputProps, Input as InputChakraUI } from "@chakra-ui/react";

export default function Input({ ...rest }: InputProps) {
  return (
    <InputChakraUI
      h="55px"
      w="full"
      display="block"
      rounded="4px"
      border="1px solid"
      borderColor="suvap.border"
      _placeholder={{
        color: "suvap.border",
      }}
      _focusVisible={{
        borderColor: "suvap.darkGray",
        boxShadow: "0 0 0 1px #bebebe",
      }}
      {...rest}
    />
  );
}
