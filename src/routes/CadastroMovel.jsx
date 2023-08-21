import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import appMoveis from "../axios/config";

import useToast from "../hooks/useToast";

import useValidationForm from "../hooks/useValidationForm";

import "./CadastroMovel.css";

const CadastroMovel = () => {
  const [nomeProduto, setNomeProduto] = useState();
  const [condicao, setCondicao] = useState();
  const [cor, setCor] = useState();
  const [preco, setPreco] = useState();
  const [imagem, setImagem] = useState();
  const [descricao, setDescricao] = useState();
  const [nomeVendedor, setNomeVendedor] = useState();
  const [telefoneVendedor, setTelefoneVendedor] = useState();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const movel = {
      nomeProduto,
      condicao,
      cor,
      preco,
      imagem,
      descricao,
      nomeVendedor,
      telefoneVendedor,
    };

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    await appMoveis
      .post("moveis/cadastro", movel)
      .then((res) => {
        if (res.status === 201) {
          useToast(res.data.message);

          navigate("/moveis");
        }
      })
      .catch((error) => {
        useToast(error.response.data.message, "error");
        useValidationForm();
      });
  };

  return (
    <>
      <h1 className="text-center py-3">Cadastre seu móvel</h1>
      <form className="needs-validation" onSubmit={handleSubmit} noValidate>
        <div className="row g-3">
          <div className="col-md-6 col-12">
            <label className="form-label" htmlFor="nomeProduto">
              Nome do Produto
            </label>
            <input
              className="form-control shadow-none"
              type="text"
              name="nomeProduto"
              id="nomeProduto"
              placeholder="Insira o nome do produto"
              onChange={(e) => setNomeProduto(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 col-12">
            <label className="form-label" htmlFor="condicao">
              Condição
            </label>
            <input
              className="form-control shadow-none"
              type="text"
              name="condicao"
              id="condicao"
              placeholder="Insira a condição do produto. ex: Novo ou Usado"
              onChange={(e) => setCondicao(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 col-12">
            <label className="form-label" htmlFor="cor">
              Cor
            </label>
            <input
              className="form-control shadow-none"
              type="text"
              name="cor"
              id="cor"
              placeholder="Insira a cor do produto"
              onChange={(e) => setCor(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 col-12">
            <label className="form-label" htmlFor="preco">
              Preço R$
            </label>
            <input
              className="form-control shadow-none"
              type="text"
              name="preco"
              id="preco"
              placeholder="Insira o preço do produto"
              onChange={(e) => setPreco(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 col-12">
            <label className="form-label" htmlFor="imagem">
              Imagem do Produto
            </label>
            <input
              className="form-control shadow-none"
              type="text"
              name="imagem"
              id="imagem"
              placeholder="Insira a url da imagem do produto"
              onChange={(e) => setImagem(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 col-12">
            <label className="form-label" htmlFor="descricao">
              Descrição do Produto
            </label>
            <textarea
              className="form-control shadow-none"
              name="descricao"
              id="descricao"
              placeholder="Insira uma descrição do produto"
              onChange={(e) => setDescricao(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="row">
            <h2 className="text-center py-3">Informações para Contato</h2>
            <div className="col-md-6 col-12">
              <label className="form-label" htmlFor="nomeVendedor">
                Nome do Vendedor
              </label>
              <input
                className="form-control shadow-none"
                type="text"
                name="nomeVendedor"
                id="nomeVendedor"
                placeholder="Insira a url da imagem do produto"
                onChange={(e) => setNomeVendedor(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 col-12">
              <label className="form-label" htmlFor="telefoneVendedor">
                Telefone de Contato
              </label>
              <input
                className="form-control shadow-none"
                type="text"
                name="telefoneVendedor"
                id="telefoneVendedor"
                placeholder="Insira o telefone de contato"
                onChange={(e) => setTelefoneVendedor(e.target.value)}
                required
              />
            </div>
            <div>
              {!loading ? (
                <input
                  className="btn-geral col-lg-3 col-md-4 col-12 my-5"
                  type="submit"
                  value="Enviar Cadastro"
                />
              ) : (
                <input
                  className="btn-geral col-lg-3 col-md-4 col-12 my-5"
                  type="submit"
                  value="Aguarde..."
                  disabled
                />
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CadastroMovel;
