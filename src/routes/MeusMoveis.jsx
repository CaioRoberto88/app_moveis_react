import React, { useState, useEffect, useContext } from "react";

import appMoveis from "../axios/config";

import useToast from "../hooks/useToast";

import { Link } from "react-router-dom";

import "./MeusMoveis.css";

const MeusMoveis = () => {
  const [moveis, setMoveis] = useState([]);

  const getMeusMoveis = async () => {
    await appMoveis
      .get("moveis/pegameusmoveis")
      .then((res) => {
        let arrayMoveis = res.data.movel;

        setMoveis(arrayMoveis);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const concluirVenda = async (idMovel) => {
    await appMoveis
      .put(`moveis/vendaconcluida/${idMovel}`)
      .then((res) => {
        useToast(res.data.message);
        getMeusMoveis();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cancelarVenda = async (idMovel) => {
    await appMoveis
      .put(`moveis/cancelavenda/${idMovel}`)
      .then((res) => {
        useToast(res.data.message);
        getMeusMoveis();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removerMovel = async (idMovel) => {
    await appMoveis
      .delete(`moveis/removemovel/${idMovel}`)
      .then((res) => {
        useToast(res.data.message);
        getMeusMoveis();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMeusMoveis();
  }, []);

  return (
    <>
      <div className="row g-3 mb-5">
        <h1 className="text-center py-3">Meus Móveis</h1>
        {moveis.length === 0 ? (
          <p className="text-center">
            Você não possui móveis a venda! Para anunciar seu primeiro móvel,
            <Link to="/cadastromovel"> clique aqui!</Link>
          </p>
        ) : (
          <></>
        )}
        {moveis.map((movel) => (
          <div className="col-md-6 py-3" key={movel.idMovel}>
            <div className="container-meusmoveis">
              Nome do produto:
              <h5>{movel.nomeProduto}</h5>
              <p>
                Imagem do produto
                <img src={movel.imagem} alt={movel.nomeProduto} />
              </p>
              {!movel.nomeComprador ? (
                <>
                  <p className="meusmoveis-situacao">Disponível para venda!</p>
                  <p className="meusmoveis-preco">R$ {movel.preco}</p>
                </>
              ) : (
                <>
                  Situação:
                  {movel.nomeComprador && movel.situacao ? (
                    <p className="situacao-negociacao">Em negociação!</p>
                  ) : (
                    <>
                      <p className="situacao-vendido">Vendido!</p>
                    </>
                  )}
                  <p>Comprador: {movel.nomeComprador}</p>
                  <p>Telefone: {movel.telefoneComprador}</p>
                  <p>
                    {movel.situacao ? (
                      <>
                        <button
                          className="btn-vender"
                          onClick={() => concluirVenda(movel.idMovel)}
                        >
                          Concluir venda
                        </button>
                        <button
                          className="btn-cancelar"
                          onClick={() => cancelarVenda(movel.idMovel)}
                        >
                          Cancelar venda
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn-remover"
                          onClick={() => removerMovel(movel.idMovel)}
                        >
                          Remover móvel
                        </button>
                      </>
                    )}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MeusMoveis;
