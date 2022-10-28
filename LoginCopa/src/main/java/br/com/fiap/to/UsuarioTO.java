package br.com.fiap.to;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class UsuarioTO {

	private String login;
	private String senha;
	private String nome;
	private String ra;

	public UsuarioTO() {
		super();
	}

	public UsuarioTO(String login, String senha, String nome, String ra) {
		super();
		this.login = login;
		this.senha = senha;
		this.nome = nome;
		this.ra = ra;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getRa() {
		return ra;
	}

	public void setRa(String ra) {
		this.ra = ra;
	}
	
	

}