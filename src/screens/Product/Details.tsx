import { BackButton } from "@/components";
import { Text } from "@/ui";
import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { useState } from "react";

const images: string[] = [
  "https://bit.ly/3zHAFCf",
  "https://bit.ly/3zIDVgL",
  "https://bit.ly/3nYoO09",
  "https://bit.ly/3MsGhYB",
  "https://bit.ly/3KLYBLi",
  "https://bit.ly/3KoyAAc",
];

export default function Details() {
  const [currentImage, setCurrentImage] = useState<string>(images[0]);

  return (
    <Box>
      <BackButton title="Nombre del post" />

      {/* Images */}
      <Box>
        <Box px="20px">
          <Image
            src={currentImage}
            alt=""
            w="full"
            h="300px"
            objectFit="cover"
          />
        </Box>

        <Grid
          mt="10px"
          px="20px"
          className="hide-scrollbar"
          overflowX="auto"
          gap="10px"
          gridTemplateColumns="repeat(2, 100px)"
          gridAutoFlow="column"
          gridAutoColumns="100px"
          py="4px"
        >
          {images.map((image: string) => (
            <Box
              outline="2px solid"
              outlineOffset="2px"
              outlineColor={
                currentImage === image
                  ? "suvap.darkGray"
                  : "transparent"
              }
              key={image}
              onClick={() => setCurrentImage(image)}
            >
              <Image
                src={image}
                alt=""
                w="full"
                h="100px"
                objectFit="cover"
              />
            </Box>
          ))}
        </Grid>
      </Box>

      <Box p="20px">
        <Text color="suvap.text" mb="20px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Similique adipisci consequuntur praesentium nostrum,
          repellat maiores deleniti sequi alias cum odio repudiandae,
          temporibus doloremque aut accusantium tempora magni optio
          minima facere.
        </Text>

        <Text color="suvap.text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illum sequi quas, deserunt totam consectetur debitis porro
          animi, at fugit accusamus excepturi aut eos, minus iste
          adipisci corporis inventore. Sint sunt, quae quo omnis nobis
          blanditiis praesentium non laborum numquam expedita sed ad
          nulla consequatur pariatur!
        </Text>
      </Box>

      <Box mt="10px" mb="32px" px="20px">
        <Box
          p="20px"
          border="1px solid"
          borderColor="suvap.secondaryGray"
          rounded="6px"
        >
          <Flex alignItems="center">
            <Box>
              <Image src="/icons/details-security.svg" alt="" />
            </Box>
            <Text ml="14px" fontWeight="semibold" fontSize="20px">
              Detalles de seguridad
            </Text>
          </Flex>

          <Text
            color="suvap.text"
            fontSize="14px"
            lineHeight="1.2"
            mt="5px"
          >
            Tener en cuenta antes de la compra
          </Text>

          <Box mt="20px">
            <Box mb="20px">
              <Flex alignItems="center">
                <Box>
                  <Image src="/icons/status-details.svg" alt="" />
                </Box>
                <Text ml="10px" fontWeight="semibold">
                  Estado
                </Text>
              </Flex>
              <Text color="suvap.text">
                El producto se encuentra usado.
              </Text>
            </Box>

            <Box mb="20px">
              <Flex alignItems="center">
                <Box>
                  <Image src="/icons/method-pay-details.svg" alt="" />
                </Box>
                <Text ml="10px" fontWeight="semibold">
                  Metodo de pago
                </Text>
              </Flex>
              <Text color="suvap.text">
                Transferencia bancaria y efectivo.
              </Text>
            </Box>

            <Box>
              <Flex alignItems="center">
                <Box>
                  <Image
                    src="/icons/status-user-details.svg"
                    alt=""
                  />
                </Box>
                <Text ml="10px" fontWeight="semibold">
                  Vendedor
                </Text>
              </Flex>
              <Text color="suvap.text">
                El vendedor no esta verificado.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
