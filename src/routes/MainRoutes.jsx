import React from "react";
import { Route, Routes } from "react-router-dom";
import Brasil from "../components/Brasil";
import CostaRica from "../components/CostaRica";
import Extras from "../components/Extras";
import Home from "../components/Home";
import Login from "../components/Login";
import Produto from "../components/Produto";
import Usa from "../components/Usa";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/produto" element={<Produto />} />
      <Route path="/brasil" element={< Brasil/>} />
      <Route path="/usa" element={< Usa/>} />
      <Route path="/costa_rica" element={< CostaRica/>} />
      <Route path="/extras" element={<Extras />} />
    </Routes>
  );
}