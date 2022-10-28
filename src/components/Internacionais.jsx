import React from "react";
import { useEffect } from "react";
import { DivContainer } from "./style";

import EuaJogador0 from "../assets/usa/jogador0.jpg"
import EuaJogador1 from "../assets/usa/jogador1.jpg"
import EuaJogador2 from "../assets/usa/jogador2.jpg"
import EuaJogador3 from "../assets/usa/jogador3.jpg"
import EuaJogador4 from "../assets/usa/jogador4.jpg"
import EuaJogador5 from "../assets/usa/jogador5.jpg"
import EuaJogador6 from "../assets/usa/jogador1.jpg"
import EuaJogador7 from "../assets/usa/jogador7.jpg"
import EuaJogador8 from "../assets/usa/jogador8.jpg"
import EuaJogador9 from "../assets/usa/jogador9.jpg"

import NetJogador0 from "../assets/netherlands/jogador0.jpg"
import NetJogador1 from "../assets/netherlands/jogador1.jpg"
import NetJogador2 from "../assets/netherlands/jogador2.jpg"

import EcuJogador0 from "../assets/ecuador/jogador0.jpg"
import EcuJogador1 from "../assets/ecuador/jogador1.jpg"
import EcuJogador2 from "../assets/ecuador/jogador2.jpg"
import EcuJogador3 from "../assets/ecuador/jogador3.jpg"
import EcuJogador4 from "../assets/ecuador/jogador4.jpg"
import EcuJogador5 from "../assets/ecuador/jogador5.jpg"
import EcuJogador6 from "../assets/ecuador/jogador1.jpg"
import EcuJogador7 from "../assets/ecuador/jogador7.jpg"
import EcuJogador8 from "../assets/ecuador/jogador8.jpg"
import EcuJogador9 from "../assets/ecuador/jogador9.jpg"

import CosJogador0 from "../assets/costa_rica/jogador0.jpg"
import CosJogador1 from "../assets/costa_rica/jogador1.jpg"
import CosJogador2 from "../assets/costa_rica/jogador2.jpg"
import CosJogador3 from "../assets/costa_rica/jogador3.jpg"
import CosJogador4 from "../assets/costa_rica/jogador4.jpg"
import CosJogador5 from "../assets/costa_rica/jogador5.jpg"
import CosJogador6 from "../assets/costa_rica/jogador1.jpg"
import CosJogador7 from "../assets/costa_rica/jogador7.jpg"
import CosJogador8 from "../assets/costa_rica/jogador8.jpg"
import CosJogador9 from "../assets/costa_rica/jogador9.jpg"

const usuario = sessionStorage.getItem("usuario-validado");

export default function Internacionais() {

  useEffect(() => {
    if (usuario == null) {
      window.location = "/";
    }
  }, []);

  return (
    <DivContainer>
      <div>
        <img src={NetJogador0} alt="NetJogador0" />
      </div>
      <div>
        <img src={NetJogador1} alt="NetJogador1" />
      </div>
      <div>
        <img src={NetJogador2} alt="NetJogador2" />
      </div>
      <div>
        <img src={CosJogador3} alt="CosJogador3" />
      </div>
      <div>
        <img src={CosJogador4} alt="CosJogador4" />
      </div>
      <div>
        <img src={CosJogador5} alt="CosJogador5" />
      </div>
      <div>
        <img src={EuaJogador6} alt="EuaJogador6" />
      </div>
      <div>
        <img src={EuaJogador7} alt="EuaJogador7" />
      </div>
      <div>
        <img src={EuaJogador8} alt="EuaJogador8" />
      </div>
      <div>
        <img src={EuaJogador9} alt="EuaJogador9" />
      </div>
    </DivContainer>
  ); 
}