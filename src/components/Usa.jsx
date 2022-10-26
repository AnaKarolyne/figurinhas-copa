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

export default function Usa() {

  return (
    <div>
        <h2>
            Usa
        </h2>
    </div>
  ); 
}