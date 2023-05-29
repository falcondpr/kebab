import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { colors } from "../../styles/theme";
import { Text } from "../../ui";
import Like from "../../assets/icons/like.svg";

const { width } = Dimensions.get("window");

export default function CardProduct() {
  const description = "Brown Blazer Coating 3xl more text large";

  return (
    <CardProductContent>
      <CardProductContainer
        source={require("../../assets/images/carousel/4.jpg")}
      >
        <LikeContainer>
          <Like />
        </LikeContainer>
      </CardProductContainer>
      <Text fontWeight="bold" color={colors.primary} marginLeft="6px">
        {description?.length > 15
          ? `${description?.slice(0, 30)}..`
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
  overflow-x: hidden;
  width: ${width / 2 - 24}px;
`;

const LikeContainer = styled.TouchableOpacity`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 30px;
  height: 30px;
`;

const CardProductContainer = styled.ImageBackground`
  width: ${width / 2 - 24}px;
  height: ${width / 2 - 24}px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 5px;
`;
