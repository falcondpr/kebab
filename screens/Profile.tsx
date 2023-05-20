import React from "react";
import { View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components/native";

import MainLayout from "../layout/Main";
import { getUser } from "../services/user";
import { useAuthStore } from "../store";
import { colors } from "../styles/theme";
import { Heading, Text } from "../ui";
import {
  settingsInfoProfile,
  settingsInfoTerms,
  settingsInfoUser,
} from "../data/settings";

import LogoutIcon from "../assets/icons/logout-icon.svg";
import VerifiedIcon from "../assets/icons/verified-icon.svg";

export default function Profile({ navigation }: any) {
  const _logout = useAuthStore((state) => state.logout);
  const userStorage = useAuthStore((state) => state.user);

  const { data: userInfo, isLoading } = useQuery<any>(
    ["getUser"],
    () => getUser(userStorage?._j.id),
    {
      enabled: !!userStorage,
    }
  );

  return (
    <MainLayout routeName="ProfileScreen" navigation={navigation}>
      <ProfileContainer showsVerticalScrollIndicator={false}>
        <ProfileBanner
          source={require("../assets/images/banner-profile.png")}
        >
          <ProfileAvatar
            source={require("../assets/images/profile-avatar.png")}
          />
          <ProfileButtonLogout
            onPress={() => {
              _logout();
              navigation.navigate("Auth");
            }}
          >
            <LogoutIcon />
          </ProfileButtonLogout>
        </ProfileBanner>

        <ProfileInfoContainer>
          {isLoading ? (
            <View
              style={{
                width: 100,
                height: 10,
                backgroundColor: colors.lightPrimary,
              }}
            ></View>
          ) : (
            <ProfileNameContainer>
              <Heading
                marginRight="5px"
                marginBottom="-3px"
                fontSize="16px"
                textTransform="capitalize"
              >
                {userInfo?.data.fullname}
              </Heading>

              <VerifiedIcon />
            </ProfileNameContainer>
          )}

          {isLoading ? (
            <View
              style={{
                width: 100,
                height: 10,
                backgroundColor: colors.lightPrimary,
                marginTop: 7,
              }}
            ></View>
          ) : (
            <Text fontSize="14px">@{userInfo?.data.username}</Text>
          )}
        </ProfileInfoContainer>

        <ProfileMainSettings>
          <View style={{ marginBottom: 10 }}>
            <Text
              marginBottom="10px"
              color={colors.primary}
              fontSize="18px"
            >
              Informacion de usuario
            </Text>

            {settingsInfoUser.map((info) => (
              <ProfileSettingsItem key={info.id}>
                <info.icon />
                <Text marginLeft="10px" fontSize="20px">
                  {info.text}
                </Text>
              </ProfileSettingsItem>
            ))}
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text
              marginBottom="10px"
              color={colors.primary}
              fontSize="18px"
            >
              Editar perfil
            </Text>

            {settingsInfoProfile.map((info) => (
              <ProfileSettingsItem key={info.id}>
                <info.icon />
                <Text marginLeft="10px" fontSize="20px">
                  {info.text}
                </Text>
              </ProfileSettingsItem>
            ))}
          </View>

          <View>
            <Text
              marginBottom="10px"
              color={colors.primary}
              fontSize="18px"
            >
              Terminos y condiciones
            </Text>

            {settingsInfoTerms.map((info) => (
              <ProfileSettingsItem key={info.id}>
                <info.icon />
                <Text marginLeft="10px" fontSize="20px">
                  {info.text}
                </Text>
              </ProfileSettingsItem>
            ))}
          </View>
        </ProfileMainSettings>

        <EmptyBottomSpace />
      </ProfileContainer>
    </MainLayout>
  );
}

const EmptyBottomSpace = styled.View`
  height: 60px;
`;

const ProfileSettingsItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileContainer = styled.ScrollView``;

const ProfileBanner = styled.ImageBackground`
  height: 120px;
  position: relative;
`;

const ProfileAvatar = styled.Image`
  position: absolute;
  bottom: -50px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-left: 20px;
`;

const ProfileNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProfileButtonLogout = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: ${colors.primary};
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileInfoContainer = styled.View`
  margin-top: 60px;
  padding: 0 20px;
`;

const ProfileMainSettings = styled.View`
  padding: 20px;
`;
