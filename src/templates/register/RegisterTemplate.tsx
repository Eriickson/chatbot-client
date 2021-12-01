import React from "react";

import Link from "next/link";

import { Box, Button, Input, Link as ChakraLink, Text } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { useUser } from "../../context";

const inputs = [
  {
    type: "text",
    name: "name",
    defaultValue: "Erickson Manuel",
  },
  {
    type: "text",
    name: "lastname",
    defaultValue: "Holguín",
  },
  {
    type: "text",
    name: "username",
    defaultValue: "erickson01d",
  },
  {
    type: "text",
    name: "email",
    defaultValue: "erickson01d@gmail.com",
  },
  {
    type: "password",
    name: "password",
    defaultValue: "123456789e.",
  },
  {
    type: "text",
    name: "numberPhone",
    defaultValue: "+1 (829) 641-0959",
  },
];

export const RegisterTemplate = () => {
  const { register, handleSubmit, formState } = useForm();
  const { registerUser } = useUser();

  function onSubmit(values: User) {
    registerUser(values);
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
              Register
            </Text>
            <form id="register-user" onSubmit={handleSubmit(onSubmit)}>
              {inputs.map((input) => (
                <Box mb={3} key={input.name}>
                  <Text fontWeight={"medium"} textTransform={"capitalize"}>
                    {input.name}
                  </Text>
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
            form="register-user"
            w={"full"}
            rounded={"sm"}
            colorScheme={"blue"}
          >
            Registrarse
          </Button>
        </Box>
        <Text textAlign={"center"}>
          You already have an account?
          <ChakraLink ml={1} textDecor={"underline"} color={"blue.400"}>
            <Link href={"/authenticate"}>Sign In</Link>
          </ChakraLink>
        </Text>
      </Box>
    </Box>
  );
};
