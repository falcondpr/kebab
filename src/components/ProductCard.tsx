import { Box, Image, Text } from "@chakra-ui/react";
import TagUser from "./TagUser";

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
  return (
    <Box
      position="relative"
      onClick={() => {
        if (productSelect.id) {
          setProductSelect({ status: false, id: null });
        } else {
          setProductSelect({ status: true, id: product.id });
        }
      }}
      opacity={
        productSelect.status
          ? product.id === productSelect.id
            ? "1"
            : "0.3"
          : "1"
      }
    >
      <Box
        display={
          productSelect.status
            ? product.id === productSelect.id
              ? "block"
              : "none"
            : "none"
        }
        position="absolute"
        top="50%"
        left="0"
        transform="translateY(-50%)"
        w="full"
        h="60px"
        bgColor="red.400"
        zIndex="20"
      ></Box>

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
    </Box>
  );
}
