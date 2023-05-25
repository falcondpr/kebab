import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

import TabBarIcon from "./TabBarIcon";
import { colors } from "../styles/theme";

const widthSize = Dimensions.get("window").width;

export default function BottomBar({
  hideBottomBar,
  navigation,
  routeName,
  routes,
}: any) {
  return (
    <BottomBarContainer
      style={{ display: hideBottomBar ? "none" : "flex" }}
    >
      {routes?.map((route: any, index: number) => (
        <BottomBarButton
          key={index}
          onPress={() => navigation.navigate(route.name)}
        >
          <TabBarIcon
            color={
              routeName === route.name
                ? colors.primary
                : colors.lightPrimary
            }
            path={route.path}
          />
        </BottomBarButton>
      ))}
    </BottomBarContainer>
  );
}

const BottomBarButton = styled.TouchableOpacity``;

const BottomBarContainer = styled.View`
  position: absolute;
  bottom: 24px;
  left: 20px;
  width: ${widthSize - 40}px;
  border-radius: 16px;
  height: 60px;
  background-color: #fff;
  shadow-color: #999;
  elevation: 10;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;
