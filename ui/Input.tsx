import React from "react";
import styled from "styled-components/native";

import Text from "./Text";

interface IInput {
  label?: string;
  marginBottom?: string;
  onChangeText: (text: string) => void;
  value: string;
  autoCapitalize?: string;
  secureTextEntry?: boolean;
  onBlur: any;
  autoFocus?: boolean;
}

export default function Input({
  label,
  onChangeText,
  value,
  autoCapitalize,
  onBlur,
  autoFocus,
  ...rest
}: IInput) {
  return (
    <InputContainer>
      <Text fontSize="14px">{label}</Text>
      <InputUI
        onBlur={onBlur}
        autoCapitalize={autoCapitalize ? "none" : "words"}
        onChangeText={onChangeText}
        value={value}
        autoFocus={autoFocus}
        {...rest}
      />
    </InputContainer>
  );
}

const InputContainer = styled.View``;

const InputUI = styled.TextInput<IInput>`
  border: 1px solid #bebebe;
  height: 50px;
  padding-left: 16px;
  border-radius: 6px;
  margin-bottom: ${(props) => props.marginBottom || "0"};
`;
