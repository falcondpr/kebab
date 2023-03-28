import { useState } from "react";
import { Box, type BoxProps } from "@chakra-ui/react";

import Menu from "./Menu";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

export default function Layout({ children, ...rest }: BoxProps) {
  const menuState = useSelector((state: RootState) => state.menu.value);

  return (
    <Box
      {...rest}
      h={menuState ? "100vh" : "full"}
      overflow={menuState ? "hidden" : "visible"}
    >
      <Menu show={menuState} />
      {children}
    </Box>
  );
}
