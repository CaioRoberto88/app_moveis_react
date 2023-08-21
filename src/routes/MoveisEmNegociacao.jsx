import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import appMoveis from "../axios/config";

import "./MoveisEmNegociacao.css";

const MoveisEmNegociacao = () => {
  const [moveis, setMoveis] = useState([]);

  const getMoveis = async () => {
    await appMoveis
      .get("moveis/moveisquerocomprar")
      .then((res) => {
        const arrayMoveis = res.data.movel;
        setMoveis(arrayMoveis);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMoveis();
  }, []);

  return (
    <>
      <h1 className="text-center py-3">Móveis em negociação!</h1>
      <div className="row g-3 text-center pt-3">
        {moveis.length === 0 ? (
          <p className="text-center">
            Você não tem nenhum móvel em negociação no momento, veja novas
            ofertas,
            <Link to="/moveis"> clicando aqui!</Link>
          </p>
        ) : (
          <>
            <div className="col-3 text-start">
              <h6 className="fw-bold d-lg-block d-md-none d-none">Produto:</h6>
            </div>
            <div className="col-1">
              <h6 className="fw-bold d-lg-block d-md-none d-none">Imagem:</h6>
            </div>
            <div className="col-4">
              <h6 className="fw-bold d-lg-block d-md-none d-none">Vendedor:</h6>
            </div>
            <div className="col-2">
              <h6 className="fw-bold d-lg-block d-md-none d-none">Telefone:</h6>
            </div>
            <div className="col-2">
              <h6 className="fw-bold d-lg-block d-md-none d-none">Situação:</h6>
            </div>
          </>
        )}
        {moveis.map((movel) => (
          <div
            className="col-12 container-moveis-em-negociacao"
            key={movel.idMovel}
          >
            <hr />
            <div className="row container-negociacao g-3">
              <h6 className="fw-bold d-lg-none d-md-block">Produto</h6>
              <div className="col-lg-3 col-12 text-justify">
                <h5>{movel.nomeProduto}</h5>
              </div>
              <div className="col-lg-1 col-12">
                <img
                  className="img-moveis-negociacao"
                  src={movel.imagem}
                  alt={movel.nomeProduto}
                />
              </div>
              <div className="col-lg-4 col-12">
                <h6 className="fw-bold d-lg-none d-md-block">Vendedor</h6>
                <p>{movel.nomeVendedor}</p>
              </div>

              <div className="col-lg-2 col-12">
                <h6 className="fw-bold d-lg-none d-md-block">Telefone</h6>
                <i className="bi bi-whatsapp"></i>
                <Link
                  to={`https://wa.me//55${movel.telefoneVendedor}?text=Olá%20${movel.nomeVendedor}%20Eu%20tenho%20interesse%20em%20comprar%20seu%20${movel.nomeProduto}!`}
                  target="_blank"
                >
                  {movel.telefoneVendedor}
                </Link>
              </div>
              <div className="col-lg-2 col-sm-12 text-center">
                <h6 className="fw-bold d-lg-none d-md-block">Situação</h6>
                {movel.situacao ? (
                  <p className="situacao-negociacao">Negociação</p>
                ) : (
                  <p className="situacao-vendido">Vendido</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoveisEmNegociacao;
