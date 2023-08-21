import React, { useState, useEffect } from "react";

import appMoveis from "../axios/config";

import useToast from "../hooks/useToast";

import useValidationForm from "../hooks/useValidationForm";

import { useParams } from "react-router-dom";

import "./Perfil.css";

const Perfil = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [imagem, setImagem] = useState("");

  const [perfil, setPerfil] = useState([]);

  const [loading, setLoading] = useState(false);

  const params = useParams();

  const getDados = async () => {
    await appMoveis
      .get(`usuario/checausuariotoken`)
      .then((res) => {
        const perfil = res.data;

        setPerfil(perfil);
      })
      .catch((error) => {});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const perfil = {
      nome,
      email,
      senha,
      confirmaSenha,
      telefone,
      imagem,
    };

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    await appMoveis
      .patch(`usuario/edita/${params.id}`, perfil)
      .then((res) => {
        useToast(res.data.message);
        setPerfil(perfil);

        setNome("");
        setEmail("");
        setSenha("");
        setConfirmaSenha("");
        setTelefone("");
        setImagem("");
      })
      .catch((error) => {
        useToast(error.response.data.message, "error");
        useValidationForm();
      });
  };

  useEffect(() => {
    getDados();
  }, []);

  return (
    <>
      {perfil.length === 0 ? (
        <p className="carregando-dados-api">Carregando...</p>
      ) : (
        <>
          <div className="row perfil-usuario">
            <h1 className="text-center py-3">Perfil Usuário</h1>
            <div className="col-md-6 offset-md-5 offset-4 col-6">
              <img src={perfil.imagem} alt={perfil.nome} />
            </div>
            <h2 className="text-center py-3">Informações pessoas</h2>
            <hr />
            <span>Nome completo:</span>
            <p>{perfil.nome}</p>
            <span>E-mail:</span>
            <p>{perfil.email}</p>
            <span>Telefone de contato:</span>
            <p>{perfil.telefone}</p>
            <hr />
          </div>
          <form
            className="needs-validation py-3"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="row g-3 mb-5">
              <h4 className="text-center py-3">
                Formulário de edição de dados
              </h4>
              <div className="col-md-6 col-12">
                <label className="form-label" htmlFor="nome">
                  Nome completo
                </label>
                <input
                  className="form-control shadow-none"
                  type="text"
                  name="nome"
                  id="nome"
                  onChange={(e) => setNome(e.target.value)}
                  value={nome || ""}
                  placeholder="Insira um novo nome completo"
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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email || ""}
                  placeholder="Insira um novo email"
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
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Insira uma nova senha"
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
                  onChange={(e) => setConfirmaSenha(e.target.value)}
                  placeholder="Insira a nova confirmação de senha"
                  required
                />
              </div>
              <div className="col-md-6 col-12">
                <label className="form-label" htmlFor="telefone">
                  Telefone de contato
                </label>
                <input
                  className="form-control shadow-none"
                  type="text"
                  name="telefone"
                  id="telefone"
                  onChange={(e) => setTelefone(e.target.value)}
                  value={telefone || ""}
                  placeholder="Insira um novo número de telefone"
                  required
                />
              </div>
              <div className="col-md-6 col-12">
                <label className="form-label" htmlFor="imagem">
                  Imagem de perfil
                </label>
                <input
                  className="form-control shadow-none"
                  type="text"
                  name="imagem"
                  id="imagem"
                  onChange={(e) => setImagem(e.target.value)}
                  value={imagem || ""}
                  placeholder="Insira uma nova URL de imagem"
                  required
                />
              </div>
              <div>
                {!loading ? (
                  <input
                    className="btn-geral  col-lg-3 col-md-4 col-12"
                    type="submit"
                    value="Confimar Atualização"
                  />
                ) : (
                  <input
                    className="btn-geral  col-lg-3 col-md-4 col-12"
                    type="submit"
                    value="Aguarde..."
                  />
                )}
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default Perfil;
