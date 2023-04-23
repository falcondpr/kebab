import React from "react";
import styled from "styled-components/native";

import { Heading, Text } from "../ui";

export default function Login() {
  return (
    <LoginContainer>
      <Heading textAlign="center">Bienvenido!</Heading>
      <Text textAlign="center">Si aun no tienes</Text>
      <Text textAlign="center">una cuenta debes registrarte</Text>
    </LoginContainer>
  );
}

const LoginContainer = styled.View`
  padding: 0 20px;
  padding-top: 60px;
`;
