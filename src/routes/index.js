import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Snack from "../pages/Snack";
import Drink from "../pages/Drink";

import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nnlanches-web" element={<Home />} />
        <Route path="/nnlanches-web/snack" element={<Snack />} />
        <Route path="/nnlanches-web/drink" element={<Drink />} />

        <Route path="/nnlanches-web/login" element={<Login />} />
        <Route path="/nnlanches-web/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
