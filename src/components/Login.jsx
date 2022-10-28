import React from "react";
import { useState } from "react";
import { DivLogin } from "./style";


export default function Login() {
  const [usuario, setUsuario] = useState({
    login: "",
    senha: "",
  });

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const logar = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    };

    const response = await fetch(
      "http://localhost:8080/LoginCopa/rest/login/",
      requestOptions
    );

    const data = await response.json();

    if (data.login) {
      sessionStorage.setItem("usuario-validado", data.login);
      window.location = "/home";
    } else {
      window.location = "/";
    }
  };

  return (
    <DivLogin>
    <section class="form-section">

        <h1>JUNTE-SE AO TIME DOS SONHOS!</h1>
        <h4>Os melhores jogadores de futebol do mundo te esperam para enfrentar a copa do mundo junto com eles.</h4>

        <div class="form-wrapper">
            <form onSubmit={logar}>
            
                <div class="input-block">
                    <label htmlFor="idLogin">Usuário:  </label>
                        <input
                            type="text" name="login" id="idLogin"
                            value={usuario.login}
                            onChange={handleChange} />
                </div>

                <div class="input-block">
                    <label htmlFor="idSenha">Senha: </label>
                        <input
                            type="password" name="senha" id="idSenha"
                            value={usuario.senha}
                            onChange={handleChange} />
                </div>

                <div>
                    <button class="btn-login">Logar</button>
                </div>
    
            </form>
        </div>
    </section>
    </DivLogin>
  );
}