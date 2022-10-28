import React from "react";
import { useEffect } from "react";

const usuario = sessionStorage.getItem("usuario-validado");

/*
  useEffect(() => {
    if (usuario == null) {
      window.location = "/";
    }
  }, []); */

export default function Extras() {
  return (
    <div>
        <h2> 
            Extras
        </h2>
    </div>
  );
}