import React from "react";

import { NavLink, useNavigate } from "react-router-dom";

//CONTEXT
import { useContext } from "react";
import { QtdContext } from "../context/QtdContext";
import { NegociacaoContext } from "../context/NegociacaoContext";

import "./Navbar.css";

const Navbar = () => {
  const { someContext } = useContext(QtdContext);
  const { algumContext } = useContext(NegociacaoContext);

  const dados = JSON.parse(localStorage.getItem("dados"));

  //const qtd = JSON.parse(localStorage.getItem("qtd"));

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" to="/">
          <img src="/logo.png" alt="logomarca" />
        </NavLink>
        <button
          className="navbar-toggler shadow-none"
          data-bs-toggle="collapse"
          data-bs-target=".collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav ms-auto">
            {!dados ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    <i className="bi bi-person-lock"></i> Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cadastrousuario">
                    <i className="bi bi-person-add"></i> Cadastro
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/moveis">
                    <i className="bi bi-lamp"></i> Moveis
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cadastromovel">
                    <i className="bi bi-bag-plus"></i> Anunciar móvel
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/meusmoveis">
                    <i className="bi bi-bag-check"></i>
                    <span className="qtdNegociacao">{someContext}</span>Meus
                    móveis
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/moveisemnegociacao">
                    <i className="bi bi-bag-check"></i>
                    <span className="qtdNegociacao">{algumContext}</span>
                    Negociação
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={`/perfil/${dados.idUsuario}`}
                  >
                    <i className="bi bi-person-fill-gear"></i> Perfil
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/login"
                    onClick={() => logout()}
                  >
                    <i className="bi bi-person-dash"></i> Sair
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
