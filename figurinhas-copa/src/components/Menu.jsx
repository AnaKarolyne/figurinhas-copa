import React from "react";
import { Link } from "react-router-dom";
import { DivCabeca, DivLogout } from "./style";

export default function Menu() {
  const logout = () => {
    sessionStorage.removeItem("usuario-validado");
    window.location = "/";
  };

  const usuario = sessionStorage.getItem("usuario-validado");

  return (
    <DivCabeca>
    <header>
      
      <div>
        <Link to="/home">Home</Link> | {" "} 
        <Link to="/">Login</Link> | {" "} 
        <Link to="/nacionais">Nacionais</Link> |{" "}
        <Link to="/internacionais">Internacionais</Link> |
        <button style={{ display: usuario != null ? "inline" : "none" }} onClick={logout} >
          Logout
        </button>
      </div>

      <div>
        <span> FIAP NA COPA </span>
      </div>

    </header>
    </DivCabeca>
  );
}