import { Box, Image, useColorMode } from "@chakra-ui/react";

import { TagUser } from "@/components";
import { Text } from "@/ui";

interface IProductSelect {
  status: boolean;
  id: string | null;
}

interface IProductCard {
  product: { id: string; image: string; name: string };
  productSelect: { status: boolean; id: string | null };
  setProductSelect: (value: IProductSelect) => void;
}

export default function ProductCard({
  product,
  productSelect,
  setProductSelect,
}: IProductCard) {
  const { colorMode } = useColorMode()
  
  return (
    <Box position="relative">
      <Box
        display={productSelect.status ? "block" : "none"}
        position="fixed"
        bgColor="rgba(255,255,255,0.35)"
        w="full"
        h="full"
        top="0"
        left="0"
        onClick={() => setProductSelect({ status: false, id: null })}
      />

      <Box
        display={
          productSelect.status
            ? product.id === productSelect.id
              ? "block"
              : "none"
            : "none"
        }
        position="absolute"
        bottom="calc(100% - 205px)"
        left="0"
        w="full"
        h="60px"
        bgColor="red.400"
        onClick={() => console.log("hi")}
        zIndex="10000"
      ></Box>

      <Box
        position="relative"
        zIndex={
          productSelect.status
            ? product.id === productSelect.id
              ? "2000"
              : "-1"
            : "50"
        }
      >
        <Box
          rounded="4px"
          overflow="hidden"
          onClick={() => {
            if (productSelect.id) {
              setProductSelect({ status: false, id: null });
            } else {
              setProductSelect({ status: true, id: product.id });
            }
          }}
        >
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
            color={colorMode === "light" ? "suvap.darkGray" : "white"}
          >
            Brown Blazer
          </Text>
          <TagUser />
        </Box>
      </Box>
    </Box>
  );
}
