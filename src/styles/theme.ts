import { extendTheme } from "@chakra-ui/react";

const colors = {
  suvap: {
    darkGray: "#333333",
    lightGray: "#F0F0F0",
  },
};

const fonts = {
  body: `'Poppins', sans-serif`,
};

export const theme = extendTheme({ colors, fonts });
