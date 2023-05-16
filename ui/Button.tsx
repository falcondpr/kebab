import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";

import Text from "./Text";
import { colors } from "../styles/theme";

interface IButton {
  children?: React.ReactNode;
  marginTop?: string;
  bgColor?: string;
  height?: string;
  color?: string;
  display?: string;
  textDecoration?: string;
  flex?: string;
  onPress?: () => void;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  isLoading?: boolean;
}

export default function Button({
  children,
  onPress,
  isLoading,
  ...rest
}: IButton) {
  return (
    <ButtonUI {...rest} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color={colors.lightPrimary} />
      ) : (
        <Text color={rest.color}>{children}</Text>
      )}
    </ButtonUI>
  );
}

const ButtonUI = styled.TouchableOpacity<IButton>`
  flex: ${(props) => props.flex || "auto"};
  display: ${(props) => props.display || "block"}
  background-color: ${(props) => props.bgColor || "transparent"};
  height: ${(props) => props.height || "auto"};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => props.marginTop || "0px"};
  ${(props) =>
    props.borderWidth &&
    props.borderStyle &&
    props.borderColor &&
    `border: ${props.borderWidth} ${props.borderStyle} ${props.borderColor}`}
`;
