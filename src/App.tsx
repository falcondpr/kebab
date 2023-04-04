import { Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./routes/router";

import Home from "./screens/Home";

function App() {
  return <Router />;
}

export default App;
