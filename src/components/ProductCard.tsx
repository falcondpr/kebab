import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  useColorMode,
} from "@chakra-ui/react";
// import { FaTimes } from "";

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
  const { colorMode } = useColorMode();

  return (
    <Box position="relative">
      <Box
        display={productSelect.status ? "block" : "none"}
        position="fixed"
        bgColor={
          colorMode === "light"
            ? "rgba(255,255,255,0.35)"
            : "rgba(0,0,0,0.3)"
        }
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
              ? "flex"
              : "none"
            : "none"
        }
        position="absolute"
        bottom="calc(100% - 205px)"
        left="0"
        mx="auto"
        justifyContent="center"
        alignItems="center"
        w="full"
        h="60%"
        zIndex="10000"
      >
        <Button
          position="absolute"
          bottom="10px"
          left="50%"
          transform="translateX(-50%)"
          w="50px"
          h="50px"
          rounded="full"
          bgColor="red.400"
          onClick={() =>
            setProductSelect({ status: false, id: null })
          }
        >
          <Image
            src="/icons/times-close-preview.svg"
            w="22px"
            alt=""
          />
        </Button>

        <Flex w="full" justifyContent="space-between">
          <Button
            display="block"
            shadow="dark-lg"
            rounded="full"
            w="50px"
            h="50px"
          >
            <Image src="/icons/like-card.svg" w="22px" alt="" />
          </Button>
          <Button
            display="block"
            shadow="dark-lg"
            rounded="full"
            w="50px"
            h="50px"
            mt="-42px"
          >
            <Image src="/icons/view-card.svg" w="26px" alt="" />
          </Button>
          <Button
            display="block"
            shadow="dark-lg"
            rounded="full"
            w="50px"
            h="50px"
          >
            <Image src="/icons/share-card.svg" w="22px" alt="" />
          </Button>
        </Flex>
      </Box>

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
