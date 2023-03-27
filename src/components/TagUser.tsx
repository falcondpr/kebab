import { Box, Flex, Image, useColorMode } from "@chakra-ui/react";
import { Text } from "@/ui";

export default function TagUser() {
  const { colorMode } = useColorMode()
  
  return (
    <Flex alignItems="center" mt="2px">
      <Box>
        <Image
          src="https://bit.ly/3LUdITQ"
          w="28px"
          h="28px"
          objectFit="cover"
          rounded="full"
          border="1px solid"
          borderColor="suvap.lightGray"
          alt=""
        />
      </Box>
      <Box ml="8px">
        <Text color={colorMode === "light" ? "gray.500" : "white"}>Stefan Bass</Text>
      </Box>
    </Flex>
  );
}
