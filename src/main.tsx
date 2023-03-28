import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/index.css";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";
import { theme } from "./styles/theme";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <ColorModeScript
          initialColorMode={theme.config.initialColorMode}
        />
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
