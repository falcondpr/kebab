import { Box } from "@chakra-ui/react";
import {
  Navigate,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Home from "@/screens/Home";
import Login from "@/screens/Login";
import { CreateProduct, Details } from "@/screens/Product";
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
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
