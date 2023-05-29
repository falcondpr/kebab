import React, { useState } from "react";
import { FlatList, ScrollView } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import MainLayout from "../layout/Main";
import { carouselData } from "../data/carousel";
import CarouselItem from "../components/CarouselItem";
import styled from "styled-components/native";
import CardProduct from "../components/Home/CardProduct";
import { CATEGORIES } from "../data/categories";
import { Button, Text } from "../ui";
import { colors } from "../styles/theme";

export default function Home({ navigation }: any) {
  const scrollX = useSharedValue(0);

  const onScroll = (e: any) => {
    scrollX.value = e.nativeEvent.contentOffset.x;
  };

  const [categorySelected, setCategorySelected] =
    useState<string>("1");

  return (
    <MainLayout routeName="HomeScreen" navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          horizontal
          onScroll={onScroll}
          scrollEventThrottle={18}
          data={carouselData}
          bounces={false}
          style={{ margin: 14, height: 300, flexGrow: 0 }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <CarouselItem
              uri={item.uri}
              scrollX={scrollX}
              index={index}
              dataLength={carouselData.length}
            />
          )}
        />

        <CategoryContainer>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              marginBottom: 20,
              marginTop: 10,
            }}
            keyExtractor={(item) => item.id}
            data={CATEGORIES}
            renderItem={({ item, index }) => (
              <Button
                borderWidth="1px"
                borderStyle="solid"
                borderColor={colors.primary}
                onPress={() => setCategorySelected(item.id)}
                paddingTop="10px"
                textTransform="uppercase"
                color={
                  categorySelected === item.id
                    ? "#fff"
                    : colors.primary
                }
                bgColor={
                  categorySelected === item.id
                    ? colors.primary
                    : "transparent"
                }
                paddingLeft="24px"
                paddingBottom="10px"
                paddingRight="24px"
                height="50px"
                marginLeft={index === 0 ? "16px" : "0px"}
                borderRadius="10px"
                marginRight={
                  CATEGORIES.length - 1 === index ? "20px" : "10px"
                }
              >
                {item.name}
              </Button>
            )}
          />
        </CategoryContainer>

        <MainHome>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </MainHome>

        <EmptyBottomSpace />
      </ScrollView>
    </MainLayout>
  );
}

const EmptyBottomSpace = styled.View`
  height: 50px;
`;

const MainHome = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 16px;
  justify-content: space-between;
  margin-top: -12px;
  margin-bottom: 20px;
`;

const CategoryContainer = styled.View``;
