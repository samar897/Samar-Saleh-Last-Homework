import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from 'react-router-dom'

import { ColorModeScript } from "@chakra-ui/color-mode";

import { ChakraProvider, extendTheme  } from "@chakra-ui/react";

import theme1 from "./theme1";

const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819"
  }
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const theme = extendTheme({ colors, config });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
  <ChakraProvider theme={theme}>
  
  <ColorModeScript initialColorMode={theme1.config.initialColorMode} />
    <App />
  </ChakraProvider>
  </BrowserRouter>,
  rootElement
);
