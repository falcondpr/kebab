import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

export default function CardProduct() {
  return (
    <CardProductContainer
      source={require("../../assets/images/carousel/4.jpg")}
    ></CardProductContainer>
  );
}

const CardProductContainer = styled.ImageBackground`
  width: ${width / 2 - 32}px;
  height: ${width / 2 - 32}px;
  border-radius: 16px;
  overflow: hidden;
  margin: 10px 6px;
`;
