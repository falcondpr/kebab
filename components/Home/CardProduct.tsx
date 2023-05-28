import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/theme";
import { Text } from "../../ui";

const { width } = Dimensions.get("window");

export default function CardProduct() {
  const description = "Brown Blazer Coating 3xl";

  return (
    <CardProductContent>
      <CardProductContainer
        source={require("../../assets/images/carousel/4.jpg")}
      ></CardProductContainer>
      <Text fontWeight="bold" color={colors.primary} marginLeft="6px">
        {description?.length > 15
          ? `${description?.slice(0, 15)}..`
          : description}
      </Text>
      <Text
        marginTop="-3px"
        fontWeight="bold"
        color={colors.lightPrimary}
        marginLeft="6px"
      >
        Gs. 200.000
      </Text>
    </CardProductContent>
  );
}

const CardProductContent = styled.View`
  margin-bottom: 20px;
`;

const CardProductContainer = styled.ImageBackground`
  width: ${width / 2 - 32}px;
  height: ${width / 2 - 32}px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 5px;
`;
