import React from "react";
import { useEffect } from "react";          

const usuario = sessionStorage.getItem("usuario-validado");

/*
RECOLOCAR DENTRO DO EXPORT DEPOIS E ANTES DO RETURN:

useEffect(() => {
  if (usuario == null) {
    window.location = "/";
  }
}, []);*/

export default function Home() {
  return (
    <div>
      <h2> 
        Olá usuário 
        <span> 
          {usuario}
        </span> 
      </h2>
      <image source={require("../assets/R.png")}/>
    </div>
  );
}