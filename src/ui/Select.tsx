import {
  SelectProps,
  Select as SelectChakraUI,
} from "@chakra-ui/react";

export default function Select({ children, ...rest }: SelectProps) {
  return (
    <SelectChakraUI
      p="0"
      h="55px"
      border="1px solid"
      borderColor="suvap.border"
      display="block"
      w="full"
      rounded="4px"
      _placeholder={{ color: "suvap.border" }}
      {...rest}
    >
      {children}
    </SelectChakraUI>
  );
}
