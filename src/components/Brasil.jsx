import React from "react";
import { useEffect } from "react";
import { DivContainer } from "./style";

import Jogador0 from "../assets/brasil/jogador0.jpg"
import Jogador1 from "../assets/brasil/jogador1.jpg"
import Jogador2 from "../assets/brasil/jogador2.jpg"
import Jogador3 from "../assets/brasil/jogador3.jpg"
import Jogador4 from "../assets/brasil/jogador4.jpg"
import Jogador5 from "../assets/brasil/jogador5.jpg"
import Jogador6 from "../assets/brasil/jogador1.jpg"
import Jogador7 from "../assets/brasil/jogador7.jpg"
import Jogador8 from "../assets/brasil/jogador8.jpg"
import Jogador9 from "../assets/brasil/jogador9.jpg"

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
    <DivContainer>
      <div>
        <img src={Jogador0} alt="Jogador0" />
      </div>
      <div>
        <img src={Jogador1} alt="Jogador1" />
      </div>
      <div>
        <img src={Jogador2} alt="Jogador2" />
      </div>
      <div>
        <img src={Jogador3} alt="Jogador3" />
      </div>
      <div>
        <img src={Jogador4} alt="Jogador4" />
      </div>
      <div>
        <img src={Jogador5} alt="Jogador5" />
      </div>
      <div>
        <img src={Jogador6} alt="Jogador6" />
      </div>
      <div>
        <img src={Jogador7} alt="Jogador7" />
      </div>
      <div>
        <img src={Jogador8} alt="Jogador8" />
      </div>
      <div>
        <img src={Jogador9} alt="Jogador9" />
      </div>
    </DivContainer>
  ); 
}