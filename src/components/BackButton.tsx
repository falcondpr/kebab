import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonProps,
  Flex,
  Image,
  useColorMode,
} from "@chakra-ui/react";

import { Text } from "@/ui";
import { useEffect } from "react";

export default function BackButton({ title, ...rest }: ButtonProps) {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <Flex alignItems="center" p="20px">
      <Button
        rounded="2px"
        w="45px"
        h="45px"
        bgColor="suvap.lightGray"
        p="0"
        onClick={() => navigate(-1)}
        {...rest}
      >
        <Image src="/icons/arrow-left.svg" alt="" />
      </Button>
      <Text
        ml="15px"
        color={colorMode === "light" ? "suvap.darkGray" : "white"}
        fontSize="18px"
      >
        {title}
      </Text>
    </Flex>
  );
}
