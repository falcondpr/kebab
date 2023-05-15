import { Dimensions, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

import StoreIcon from "../assets/icons/store-icon.svg";
import SearchIcon from "../assets/icons/search-icon.svg";
import PlusIcon from "../assets/icons/plus-icon.svg";
import MessageIcon from "../assets/icons/message-icon.svg";
import ProfileIcon from "../assets/icons/profile-icon.svg";

import IconStoreTSX from "../assets/icons/Store";

const widthSize = Dimensions.get("window").width;

export default function BottomBar({ navigation }: any) {
  return (
    <BottomBarContainer>
      <BottomBarButton>{/* <IconStoreTSX /> */}</BottomBarButton>
      <BottomBarButton>
        <SearchIcon />
      </BottomBarButton>
      <BottomBarButton>
        <PlusIcon />
      </BottomBarButton>
      <BottomBarButton>
        <MessageIcon />
      </BottomBarButton>
      <BottomBarButton>
        <ProfileIcon />
      </BottomBarButton>
    </BottomBarContainer>
  );
}

const BottomBarContainer = styled.View`
  position: absolute;
  bottom: 24px;
  left: 20px;
  width: ${widthSize - 40}px;
  border-radius: 20px;
  height: 60px;
  background-color: #fff;
  shadow-color: #999;
  elevation: 10;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;

const BottomBarButton = styled.TouchableOpacity``;
