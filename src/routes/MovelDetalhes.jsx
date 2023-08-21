import React, { useState, useEffect } from "react";

import appMoveis from "../axios/config";

import { useParams, useNavigate } from "react-router-dom";

import useToast from "../hooks/useToast";

import "./MovelDetalhes.css";

const MovelDetalhes = () => {

  const [movel, setMovel] = useState([]);

  const idMovel = useParams();

  const navigate = useNavigate();

  const getDados = async () => {
    
    await appMoveis.get(`moveis/${idMovel.id}`).then((res) => {

      const moveis = res.data.movel;

      setMovel(moveis);
    });

  };

  const handleSubmit = async (e) => {
    await appMoveis
      .put(`moveis/desejocomprar/${idMovel.id}`)
      .then((res) => {
        useToast(res.data.message);
        navigate("/moveis");
      })
      .catch((error) => {
        useToast(error.response.data.message, "error");
      });
  };

  useEffect(() => {
    getDados();
  }, []);

  return (
    <div>
      {movel.length === 0 ? (
        <p className="carregando-dados-api">Carregando...</p>
      ) : (
        <div className="row">
          <div className="col-md-6 col-12">
            <img
              className="img-detalhes"
              src={movel.imagem}
              alt={movel.nomeProduto}
            />
          </div>
          <div className="col-md-6 col-12">
            <h1 className="title-detalhes py-3">{movel.nomeProduto}</h1>
            <h3 className="preco-detalhes mb-5">R$ {movel.preco}</h3>

            <div className="container-detalhes">
              <hr />
              <h5 className="vendedor-detalhes">
                Vendedor <br />
                {movel.nomeVendedor}
              </h5>
              <hr />
              {!movel.nomeComprador ? (
                <input
                  className="btn-negociar"
                  type="submit"
                  value="Quero Negociar!"
                  onClick={(e) => handleSubmit(e)}
                />
              ) : movel.situacao ? (
                <input
                  className="btn-negociando"
                  type="submit"
                  value="Em Negociação!"
                  disabled
                />
              ) : (
                <input
                  className="btn-vendido"
                  type="submit"
                  value="Vendido!"
                  disabled
                />
              )}
            </div>
          </div>
          <div className="col-12 py-5">
            <hr />
            <h2 className="text-center py-3 fw-bold">Descrição:</h2>
            <p>{movel.descricao}</p>
            <hr />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovelDetalhes;
