import React from "react";

import Router from "next/router";

import { Box, Button, Container, Flex, Link, Text } from "@chakra-ui/react";
import { useUser } from "../context";

export const Header = () => {
  const { isAuth, user, logout } = useUser();

  return (
    <Box bgColor={"blue.500"} py={3} mb="5">
      <Container maxW="container.xl">
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/">
            <Text color="white" fontSize={"xl"} fontWeight={"semibold"}>
              Shopping Online
            </Text>
          </Link>
          {isAuth ? (
            <Box>
              <Box color={"white"}>
                <Text fontWeight={"medium"} lineHeight={"none"}>
                  {user.name} {user.lastname}{" "}
                </Text>
                <Text textAlign={"right"} fontSize={"sm"}>
                  {user.email}
                </Text>
                <Text
                  _hover={{ textDecor: "underline" }}
                  cursor="pointer"
                  textAlign={"right"}
                  fontSize={"sm"}
                  onClick={logout}
                >
                  Cerrar Sesión
                </Text>
              </Box>

              {/* <ShoppingCart /> */}
            </Box>
          ) : (
            <Box display={"flex"} alignItems={"flex-end"}>
              <Button
                rounded="sm"
                _focus={{ shadow: "sm" }}
                colorScheme={"blue"}
                mr={2}
                onClick={() => Router.push("/authenticate")}
              >
                Iniciar Sesión
              </Button>
              <Button
                rounded="sm"
                _focus={{ shadow: "sm" }}
                onClick={() => Router.push("/register")}
              >
                Regístrate
              </Button>
            </Box>
          )}
        </Flex>
      </Container>
    </Box>
  );
};
