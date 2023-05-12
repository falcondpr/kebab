import React from "react";
import styled from "styled-components/native";

import { Text } from '../ui';
import { colors } from "../styles/theme";
import ArrowLeft from "../assets/icons/arrow-left.svg";

interface IBackButton {
  title?: string;
  onPress?: () => void;
}

const BackButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export default function BackButton({ onPress, title }: IBackButton) {
  return (
    <BackButtonContainer>
      <Button onPress={onPress}>
        <ArrowLeft />
      </Button>
      <Text fontSize="18px" marginLeft="15px" color={colors.primary}>{title || ""}</Text>
    </BackButtonContainer>
  );
}
