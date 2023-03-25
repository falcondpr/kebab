import { Box } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

export default function Layout({ children, ...rest }: BoxProps) {
  return <Box {...rest}>{children}</Box>;
}
