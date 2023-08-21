import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import appMoveis from "../axios/config";

import useToast from "../hooks/useToast";

import useValidationForm from "../hooks/useValidationForm";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState();

  const [senha, setSenha] = useState();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
      senha,
    };

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    await appMoveis
      .post("usuario/login", data)
      .then((res) => {
        const dados = res.data;

        useToast(res.data.message);

        localStorage.setItem("dados", JSON.stringify(dados));

        navigate("/moveis");

        window.location.replace("/moveis");
      })
      .catch((error) => {
        useToast(error.response.data.message, "error");
        useValidationForm();
      });
  };

  return (
    <>
      <h1 className="text-center py-3">Página de Login</h1>
      <form
        className="needs-validation pt-3"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="row d-block">
          <div className="col-md-6 m-auto py-3">
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
            <span className="invalid-feedback"></span>
            <span className="valid-feedback"></span>
          </div>
          <div className="col-md-6 m-auto">
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
            <Link to={"/"}>
              <small>Esqueceu a senha?</small>
            </Link>
          </div>
          {!loading ? (
            <div className="col-md-6 m-auto">
              <input
                className="btn-geral col-md-3 col-12"
                type="submit"
                value="Login"
              />
            </div>
          ) : (
            <div className="col-md-6 m-auto">
              <input
                className="btn-geral col-md-3 col-12"
                type="submit"
                value="Aguarde..."
              />
            </div>
          )}
          <div className="col-md-6 m-auto pt-5 my-3">
            <Link to={"/cadastrousuario"}>
              <p>Não possui cadadastro?</p>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
