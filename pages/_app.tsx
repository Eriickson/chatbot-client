import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { ProductProvider } from "../src/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ProductProvider>
        <Component {...pageProps} />
      </ProductProvider>
    </ChakraProvider>
  );
}

export default MyApp;
