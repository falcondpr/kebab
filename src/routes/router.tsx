import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@/screens/Home";
import Login from "@/screens/Login";

export default function Router() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          {/* Screens */}
          <Route path="/" element={<Home />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
