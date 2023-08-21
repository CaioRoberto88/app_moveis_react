import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import appMoveis from "../axios/config";

import useToast from "../hooks/useToast";

import useValidationForm from "../hooks/useValidationForm";

import "./CadastroUsuario.css";

const CadastroUsuario = () => {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [confirmaSenha, setConfirmaSenha] = useState();
  const [telefone, setTelefone] = useState();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nome,
      email,
      senha,
      confirmaSenha,
      telefone,
    };

    setLoading(true);

    setInterval(() => {
      setLoading(false);
    }, 2000);

    await appMoveis
      .post("usuario/cadastro", data)
      .then((res) => {
        if (res.status === 201) {
          navigate("/login");
          useToast(res.data.message);
        }
      })
      .catch((err) => {
        useToast(err.response.data.message, "error");
        useValidationForm();
      });
  };

  return (
    <>
      <h1 className="text-center py-3">Página de Cadastro</h1>
      <form className="needs-validation" onSubmit={handleSubmit} noValidate>
        <div className="row g-3">
          <div className="col-md-6 col-12">
            <label className="form-label" htmlFor="nome">
              Nome completo
            </label>
            <input
              className="form-control shadow-none"
              type="text"
              name="nome"
              id="nome"
              placeholder="Insira seu nome completo"
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 col-12">
            <label className="form-label" htmlFor="email">
              E-mail
            </label>
            <input
              className="form-control shadow-none"
              type="email"
              name="email"
              id="email"
              placeholder="Insira seu e-mail completo"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 col-12">
            <label className="form-label" htmlFor="senha">
              Senha
            </label>
            <input
              className="form-control shadow-none"
              type="password"
              name="senha"
              id="senha"
              placeholder="Insira sua senha"
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 col-12">
            <label className="form-label" htmlFor="confirmaSenha">
              Confirma senha
            </label>
            <input
              className="form-control shadow-none"
              type="password"
              name="confirmaSenha"
              id="confirmaSenha"
              placeholder="Confirme sua senha"
              onChange={(e) => setConfirmaSenha(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 col-12">
            <label className="form-label" htmlFor="telefone">
              Número de celular
            </label>
            <input
              className="form-control shadow-none"
              type="text"
              name="telefone"
              id="telefone"
              placeholder="Insira seu número de contato ex: (27)99999-0000"
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            {!loading ? (
              <input
                className="btn-geral col-md-4 col-12"
                type="submit"
                value="Enviar Cadastro"
              />
            ) : (
              <input
                className="btn-geral col-md-4 col-12"
                type="submit"
                value="Aguarde..."
                disabled
              />
            )}
          </div>
          <div className="col-md-6 me-auto pt-5">
            <Link to={"/login"}>
              <p>Já possui cadadastro?</p>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default CadastroUsuario;
