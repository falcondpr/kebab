import React from "react";
import { FlatList, ScrollView } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import MainLayout from "../layout/Main";
import { carouselData } from "../data/carousel";
import CarouselItem from "../components/CarouselItem";
import styled from "styled-components/native";
import CardProduct from "../components/Home/CardProduct";

export default function Home({ navigation }: any) {
  const scrollX = useSharedValue(0);

  const onScroll = (e: any) => {
    scrollX.value = e.nativeEvent.contentOffset.x;
  };

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
