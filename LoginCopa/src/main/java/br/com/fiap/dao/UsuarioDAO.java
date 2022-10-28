package br.com.fiap.dao;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import br.com.fiap.to.UsuarioTO;

public class UsuarioDAO {
	public static List<UsuarioTO> listaUsuario;

	public UsuarioDAO() {
		if (listaUsuario == null) {
			listaUsuario = new ArrayList<UsuarioTO>();
			
			UsuarioTO user = new UsuarioTO();
			user.setLogin("Brasil");
			user.setSenha("2022");
			user.setNome("JoaoFiap");
			user.setRa("RM99999");
			listaUsuario.add(user);
		}

	}

	public UsuarioTO loginDAO(UsuarioTO u) {
		for (int i = 0; i < listaUsuario.size(); i++) {
			if (listaUsuario.get(i).getLogin().equals(u.getLogin())
					&& listaUsuario.get(i).getSenha().equals(u.getSenha())) {
					
				System.out.println("Usuário Logado:" + listaUsuario.get(i).getLogin());
				
				return listaUsuario.get(i);
			}
		}
		System.out.println("Falha no Login:" + u.getLogin() + " Horário:" + Calendar.getInstance().getTime());
		return null;
	}
}