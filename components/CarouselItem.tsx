import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

const LARGE_IMAGE_WIDTH = width * 0.5;
const MEDIUM_IMAGE_WIDTH = LARGE_IMAGE_WIDTH * 0.5;
const SMALL_IMAGE_WIDTH = MEDIUM_IMAGE_WIDTH * 0.5;

export default function CarouselItem({
  uri,
  scrollX,
  index,
  dataLength,
}: any) {
  const inputRage = [
    (index - 2) * SMALL_IMAGE_WIDTH,
    (index - 1) * SMALL_IMAGE_WIDTH,
    index * SMALL_IMAGE_WIDTH,
    (index + 1) * SMALL_IMAGE_WIDTH,
  ];

  const isLastItem = dataLength === index + 1;
  const isSecondLastItem = dataLength === index + 2;

  const secondLastItemOutputRange = [
    SMALL_IMAGE_WIDTH,
    MEDIUM_IMAGE_WIDTH,
    MEDIUM_IMAGE_WIDTH,
    SMALL_IMAGE_WIDTH,
  ];

  const lastItemOutputRange = [
    SMALL_IMAGE_WIDTH,
    LARGE_IMAGE_WIDTH,
    LARGE_IMAGE_WIDTH,
    SMALL_IMAGE_WIDTH,
  ];

  const outputRange = isLastItem
    ? lastItemOutputRange
    : isSecondLastItem
    ? secondLastItemOutputRange
    : [
        SMALL_IMAGE_WIDTH,
        MEDIUM_IMAGE_WIDTH,
        LARGE_IMAGE_WIDTH,
        SMALL_IMAGE_WIDTH,
      ];

  const animatedStyle = useAnimatedStyle(() => ({
    width: interpolate(
      scrollX.value,
      inputRage,
      outputRange,
      "clamp"
    ),
  }));

  return (
    <Animated.Image
      source={{ uri }}
      style={[styles.image, animatedStyle]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 300,
    marginRight: 8,
    borderRadius: 20,
  },
});
