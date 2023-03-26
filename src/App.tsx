import { Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
