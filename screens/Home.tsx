import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import BellIcon from "../assets/icons/bell-icon.svg";
import { useAuthStore } from "../store/auth.store";
import { colors } from "../styles/theme";
import { Heading } from "../ui";

export default function Home({ navigation }: any) {
  const user = useAuthStore((state) => state.user);

  return (
    <View>
      <HeaderContainer>
        <Heading
          color={colors.primary}
          fontSize="24px"
          textTransform="uppercase"
        >
          Sura
        </Heading>
        <ButtonNotification>
          <BellIcon />
        </ButtonNotification>
      </HeaderContainer>

      <HeroImageContainer>
        <HeroImage
          source={require("../assets/images/header-home.png")}
        />
      </HeroImageContainer>

      <Button>
        <ButtonText
          style={{
            height: 50,
            backgroundColor: "#333",
            color: "#fff",
          }}
          onPress={() => navigation.navigate("Auth")}
        >
          go to auth
        </ButtonText>

        <ButtonText
          style={{ margin: 20, padding: 20, backgroundColor: "#3fd" }}
          onPress={() => user ? console.log(user) : null}
        >
          obtener usuario logueado
        </ButtonText>
      </Button>
    </View>
  );
}

const Button = styled.TouchableOpacity``;

const ButtonText = styled.Text``;

const HeaderContainer = styled.View`
  padding: 20px;
  /* padding-bottom: 16px; */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeroImageContainer = styled.View``;

const HeroImage = styled.ImageBackground`
  height: 225px;
  margin: 0 20px;
  object-fit: cover;
`;

const ButtonNotification = styled.TouchableOpacity`
  padding: 8px;
  margin-top: -3px;
`;
