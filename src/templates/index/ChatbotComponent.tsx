import {
  Fade,
  Image,
  Button,
  Box,
  useDisclosure,
  Img,
  Text,
  SimpleGrid,
  GridItem,
  Flex,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";

// @ts-ignore
import ChatBot from "react-simple-chatbot";
import { useProduct, useUser } from "../../context";
import { useForm } from "react-hook-form";

export const ChatbotComponent = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { products } = useProduct();
  const { isAuth } = useUser();
  const { handleSubmit, register } = useForm();

  const options = [
    {
      id: "opt-1",
      label: "Ver catálogo",
      trigger: "opt-1-1",
    },
    // {
    //   id: "opt-2",
    //   message: "Comprar algún producto",
    //   trigger: "opt-1-2",
    // },
    // {
    //   id: "opt-3",
    //   message: "Ver mis pedidos",
    //   trigger: "opt-1-3",
    // },
  ];

  const lineOpt_1 = [
    {
      id: "opt-1-1",
      message: "Este es nuestro catálogo completo",
      trigger: "opt-1-2",
    },
    {
      id: "opt-1-2",
      component: (
        <form
          onSubmit={handleSubmit((values) => {
            console.log(values);
          })}
        >
          <SimpleGrid columns={12} gap={5}>
            {products.map((product) => (
              <GridItem colSpan={6}>
                <Img src={product.image} />
                <Flex alignItems="flex-start">
                  <Checkbox
                    mr={3}
                    id={product._id}
                    value={product._id}
                    {...register("products")}
                  />
                  <Text cursor={"pointer"}>
                    <label htmlFor={product._id}>
                      {product.title} - $ {product.price}
                    </label>
                  </Text>
                </Flex>
              </GridItem>
            ))}
            <GridItem colSpan={12}>
              {isAuth ? (
                <Button
                  type="submit"
                  onClick={() => {
                    console.log("Compra");
                  }}
                  w={"full"}
                >
                  Comprar
                </Button>
              ) : (
                <Link href="/authenticate">
                  <Button w={"full"}>Debes iniciar sesión</Button>
                </Link>
              )}
            </GridItem>
          </SimpleGrid>
        </form>
      ),
    },
  ];

  return (
    <Box zIndex={1000} right={0} bottom={0} pos={"fixed"}>
      <Fade in={isOpen}>
        {isOpen && (
          <Box
            right={0}
            bottom={0}
            position={"absolute"}
            marginRight={"2.5rem"}
            marginBottom={"7rem"}
          >
            <ChatBot
              steps={
                /* [
                {
                  id: "1",
                  message: "Hola, soy tu asistente virtual",
                  trigger: "2",
                },
                {
                  id: "2",
                  message: "En que podemos servirte:",
                  trigger: "3",
                },
                {
                  id: "3",
                  options,
                },
                ...lineOpt_1,
              ] */ lineOpt_1
              }
            />
          </Box>
        )}
      </Fade>
      <Button
        _focus={{ shadow: "none" }}
        rounded="sm"
        p={2}
        w={12}
        h={12}
        m={10}
        onClick={onToggle}
      >
        <Image src="https://cdn-icons-png.flaticon.com/512/2728/2728279.png" />
      </Button>
    </Box>
  );
};
