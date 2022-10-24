import React from "react";
import { useEffect } from "react";

const usuario = sessionStorage.getItem("usuario-validado");

/*
  useEffect(() => {
    if (usuario == null) {
      window.location = "/";
    }
  }, []); */

export default function Internacionais() {
  return (
    <div>
        <h2> 
            Internacionais
        </h2>
    </div>
  );
}