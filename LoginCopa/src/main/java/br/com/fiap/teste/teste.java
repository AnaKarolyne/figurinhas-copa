package br.com.fiap.teste;

import br.com.fiap.bo.UsuarioBO;
import br.com.fiap.to.UsuarioTO;

public class teste {

	public static void main(String[] args) {
		
		UsuarioBO ub = new UsuarioBO();
		UsuarioTO ut = new UsuarioTO("Brasil","2022", "JoaoFiap", "RM99999");
		
		System.out.println("Resultado: " + ub.validacao(ut).getLogin());

	}

}