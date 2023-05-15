import React from "react";
import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import PagerView from "react-native-pager-view";

import BellIcon from "../assets/icons/bell-icon.svg";
import MainLayout from "../layout/Main";
import { colors } from "../styles/theme";
import { Heading, Text } from "../ui";

export default function Home({ navigation }: any) {
  return (
    <MainLayout navigation={navigation}>
      {/* <PagerView style={styles.pagerView} initialPage={0} orientation="vertical">
        <View style={{ backgroundColor: "lightblue", flex: 1 }} key="1">
          <Text>First page</Text>
        </View>
        <View style={{ backgroundColor: "pink", flex: 1 }} key="2">
          <Text>Second page</Text>
        </View>
      </PagerView> */}

      {/* <HeaderContainer>
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
      </HeroImageContainer> */}

      {/* <Button>
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
      </Button> */}
    </MainLayout>
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

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
});
