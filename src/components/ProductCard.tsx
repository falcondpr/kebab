import { Box, Image, Text } from "@chakra-ui/react";
import TagUser from "./TagUser";

export default function ProductCard({ product }: any) {
  return (
    <Box>
      <Box rounded="4px" overflow="hidden">
        <Image
          h="205px"
          src={product.image}
          w="full"
          alt=""
          objectFit="cover"
        />
      </Box>

      <Box mt="5px">
        <Text
          fontSize="18px"
          fontWeight="semibold"
          color="suvap.darkGray"
        >
          Brown Blazer
        </Text>
        <TagUser />
      </Box>
    </Box>
  );
}
