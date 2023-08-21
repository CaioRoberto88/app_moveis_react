import { createContext, useState, useEffect } from "react";

export const QtdContext = createContext();

import appMoveis from "../axios/config";

export const QtdProvider = ({ children }) => {
  
  let [qtd, setQtd] = useState(0);

  const getQuantidade = async () => {
    if (localStorage.getItem("dados")) {
      await appMoveis
        .get("moveis/pegameusmoveis")
        .then((res) => {
          const qtdMoveis = res.data.movel;
          let contador = 0;
          for (let q in qtdMoveis) {
            if (
              qtdMoveis[q].nomeComprador != null &&
              qtdMoveis[q].situacao !== false
            ) {
              contador++;

              setQtd(contador);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const someContext = qtd;

  localStorage.setItem("qtd", JSON.stringify(qtd));

  useEffect(() => {
    getQuantidade();
  }, []);

  return (
    <QtdContext.Provider value={{ someContext, getQuantidade }}>
      {children}
    </QtdContext.Provider>
  );
};
