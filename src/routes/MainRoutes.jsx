import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Internacionais from "../components/Internacionais";
import Login from "../components/Login";
import Nacionais from "../components/Nacionais";
import Produto from "../components/Produto";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/produto" element={<Produto />} />
      <Route path="/nacionais" element={<Nacionais />} />
      <Route path="/internacionais" element={<Internacionais />} />
    </Routes>
  );
}