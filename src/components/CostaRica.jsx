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

export default function CostaRica() {

  return (
    <div>
        <h2>
            Costa Rica
        </h2>
    </div>
  ); 
}