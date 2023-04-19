import React from "react";
import styled from "styled-components/native";

import ArrowLeft from "../assets/icons/arrow-left.svg";

const BackButtonContainer = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const Text = styled.Text`
  font-size: 18px;
  margin-left: 15px;
  color: #333;
`;

export default function BackButton() {
  return (
    <BackButtonContainer>
      <Button>
        <ArrowLeft />
      </Button>
      <Text>Crear post</Text>
    </BackButtonContainer>
  );
}
