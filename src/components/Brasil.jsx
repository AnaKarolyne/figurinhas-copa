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

export default function Brasil() {

  return (
    <div>
        <h2>
            Brasil
        </h2>
    </div>
  ); 
}