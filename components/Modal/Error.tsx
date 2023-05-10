import { Dimensions } from "react-native";
import React from "react";
import styled from "styled-components/native";

import { Button, Heading, Text } from "../../ui";
import { colors } from "../../styles/theme";

const widthSize = Dimensions.get("window").width;
const heightSize = Dimensions.get("window").height;

export default function ModalError({ navigation }: any) {
  return (
    <ModalErrorContainer>
      <ModalErrorInfo>
        <Heading textAlign="center" marginBottom="-5px">
          Error!
        </Heading>
        <Text textAlign="center">Debes iniciar sesion!</Text>
        <ModalErrorFooter>
          <Button
            onPress={() => navigation.navigate("Auth")}
            color="white"
            bgColor={colors.primary}
            height="56px"
          >
            Inicia sesion
          </Button>
        </ModalErrorFooter>
      </ModalErrorInfo>
    </ModalErrorContainer>
  );
}

const ModalErrorContainer = styled.View`
  width: ${widthSize}px;
  height: ${heightSize}px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ModalErrorInfo = styled.View`
  width: ${widthSize - 120}px;
`;

const ModalErrorFooter = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;
