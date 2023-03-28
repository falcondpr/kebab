import { useState } from "react";
import { Box, type BoxProps } from "@chakra-ui/react";

import Menu from "./Menu";

export default function Layout({ children, ...rest }: BoxProps) {
  const [showMenu, setShowMenu] = useState<boolean>(true);

  return (
    <Box
      {...rest}
      h={showMenu ? "100vh" : "full"}
      overflow={showMenu ? "hidden" : "visible"}
    >
      <Menu />
      {children}
    </Box>
  );
}
