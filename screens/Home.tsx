import React from "react";
import { FlatList } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import MainLayout from "../layout/Main";
import { carouselData } from "../data/carousel";
import CarouselItem from "../components/CarouselItem";

export default function Home({ navigation }: any) {
  const scrollX = useSharedValue(0);

  const onScroll = (e: any) => {
    scrollX.value = e.nativeEvent.contentOffset.x;
  };

  return (
    <MainLayout routeName="HomeScreen" navigation={navigation}>
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
    </MainLayout>
  );
}
