import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@/screens/Home";
import Login from "@/screens/Login";
import { Details } from "@/screens/Product";
import Profile from "@/screens/Profile";

export default function Router() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          {/* Screens */}
          <Route path="/" element={<Home />} />
          <Route path="/product/1" element={<Details />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />

          {/* Profile and settings */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
