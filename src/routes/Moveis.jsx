import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import appMoveis from "../axios/config";

import "./Moveis.css";

const moveis = () => {
  const [moveis, setMoveis] = useState([]);

  const moveisData = async () => {
    const dados = await appMoveis.get("moveis/pegatodosmoveis");

    setMoveis(dados.data.moveis);
  };

  useEffect(() => {
    moveisData();
  }, []);

  return (
    <>
      <h1 className="text-center py-3">Lista de Móveis</h1>

      <div className="row">
        {moveis.length === 0 && (
          <p className="carregando-dados-api">Carregando...</p>
        )}
        {moveis.map((movel) => (
          <div className="col-lg-3 col-md-4 col-8 my-3 card-container" key={movel.idMovel}>
            <div className="card h-100">
              <img
                className="img-moveis img-fluid"
                src={movel.imagem}
                alt={movel.nomeProduto}
              />
              <div className="header h-100">
                <h6 className="card-title">{movel.nomeProduto}</h6>
              </div>
              <div className="card-footer text-center">
                <div className="mb-4">
                  <h5 className="movel-preco">R${movel.preco}</h5>
                </div>

                <Link
                  type="button"
                  className="btn-detalhes"
                  to={`/moveldetalhes/${movel.idMovel}`}
                >
                  Saiba mais...
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default moveis;
