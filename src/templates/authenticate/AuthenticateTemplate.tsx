import React from "react";

import Link from "next/link";

import { Box, Button, Input, Link as ChakraLink, Text } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { useUser } from "../../context";

const inputs = [
  {
    type: "text",
    label: "Username or Email",
    name: "identifier",
    defaultValue: "erickson01d",
  },
  {
    type: "password",
    label: "Password",
    name: "password",
    defaultValue: "123456789e.",
  },
];

export const AuthenticateTemplate = () => {
  const { register, handleSubmit } = useForm();
  const { authenticateUser } = useUser();

  function onSubmit(values: AuthenticateUserPayload) {
    authenticateUser(values);
  }

  return (
    <Box
      minHeight={"100vh"}
      bgColor="#f8f8f8"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box>
        <Box mb={2} bgColor={"white"} shadow={"sm"} minW={"96"}>
          <Box pb={6} pt={3} px={6}>
            <Text textAlign={"center"} mb={3} fontSize={"3xl"}>
              Login
            </Text>
            <form id="login-user" onSubmit={handleSubmit(onSubmit)}>
              {inputs.map((input) => (
                <Box mb={3} key={input.name}>
                  <Text fontWeight={"medium"}>{input.label}</Text>
                  <Input
                    rounded={"sm"}
                    type={input.type}
                    defaultValue={input.defaultValue}
                    {...register(input.name, { required: true })}
                  />
                </Box>
              ))}
            </form>
          </Box>
          <Button
            type="submit"
            form="login-user"
            w={"full"}
            rounded={"sm"}
            colorScheme={"blue"}
          >
            Sign in
          </Button>
        </Box>
        <Text textAlign={"center"}>
          You do not have an account?
          <ChakraLink ml={1} textDecor={"underline"} color={"blue.400"}>
            <Link href={"/register"}>Register</Link>
          </ChakraLink>
        </Text>
      </Box>
    </Box>
  );
};
