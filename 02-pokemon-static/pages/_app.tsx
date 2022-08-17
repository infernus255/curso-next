//next imports
import type { AppProps } from "next/app";
//thrid party imports
import { NextUIProvider } from "@nextui-org/react";
//personal imports
import "../styles/globals.css";
import { darkTheme } from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
