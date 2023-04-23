import React from "react";
import Svg, { G, Path } from "react-native-svg";

interface ITabBarIcon {
  color: string;
  path: string;
}

export default function TabBarIcon({ color, path }: ITabBarIcon) {
  return (
    <Svg
      width={42}
      height={42}
      scale={2}
      viewBox="0 0 38 38"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
    >
      <G>
        <Path d={path} fill={color} />
      </G>
    </Svg>
  );
}
