import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";

import Text from "./Text";
import { colors } from "../styles/theme";

interface IButton {
  children?: React.ReactNode;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;

  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;

  fontSize?: string;
  
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
  width?: string;
  borderRadius?: string;
  textTransform?: string;
}

export default function Button({
  children,
  onPress,
  isLoading,
  color,
  textTransform,
  fontSize = '16px',
  ...rest
}: IButton) {
  return (
    <ButtonUI {...rest} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color={colors.lightPrimary} />
      ) : (
        <Text fontSize={fontSize} textTransform={textTransform} color={color}>
          {children}
        </Text>
      )}
    </ButtonUI>
  );
}

const ButtonUI = styled.TouchableOpacity<IButton>`
  flex: ${(props) => props.flex || "auto"};
  background-color: ${(props) => props.bgColor || "transparent"};
  height: ${(props) => props.height || "auto"};
  border-radius: ${(props) => props.borderRadius || "6px"};

  display: ${(props) => props.display || "flex"};
  align-items: center;
  justify-content: center;

  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
  margin-right: ${(props) => props.marginRight || "0px"};

  padding-top: ${(props) => props.paddingTop || "0px"};
  padding-bottom: ${(props) => props.paddingBottom || "0px"};
  padding-left: ${(props) => props.paddingLeft || "0px"};
  padding-right: ${(props) => props.paddingRight || "0px"};

  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) =>
    props.borderWidth &&
    props.borderStyle &&
    props.borderColor &&
    `border: ${props.borderWidth} ${props.borderStyle} ${props.borderColor}`}
`;
