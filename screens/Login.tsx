import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { Heading } from "../ui";

export default function Login() {
  return (
    <LoginContainer>
      <Heading textAlign="center">Bienvenido!</Heading>
    </LoginContainer>
  );
}

const LoginContainer = styled.View`
  padding-top: 60px;
`;
