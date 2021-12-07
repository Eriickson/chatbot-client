import { Fade, Image, Button, Box, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";

import ChatBot from "react-simple-chatbot";

export const ChatbotComponent = () => {
  const { isOpen, onToggle } = useDisclosure();

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
              steps={[
                {
                  id: "hello-world",
                  message: "Hello World!",
                  end: true,
                },
              ]}
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
