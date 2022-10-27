import React from "react";
import { useEffect } from "react";          
import ImgR from '../assets/extras/R.png';
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
      <h1>
        TEXTO SOBRE A LOUCURA DA COPA E DA COLEç+ÇÂO DE FIG
      </h1>
      <h2> 
        Olá usuário 
        <span> 
          {usuario}
        </span> 
      </h2>
      <image src={ImgR} alt='Imagem R'/>
    </div>
  );
}