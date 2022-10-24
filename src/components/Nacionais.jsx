import React from "react";
import { useEffect } from "react";

const usuario = sessionStorage.getItem("usuario-validado");

/*
  useEffect(() => {
    if (usuario == null) {
      window.location = "/";
    }
  }, []);
*/

export default function Nacionais() {

  return (
    <div>
        <h2>
            Nacionais
        </h2>
    </div>
  ); 
}