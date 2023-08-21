import { createContext, useState, useEffect } from "react";

import appMoveis from "../axios/config";

export const NegociacaoContext = createContext();

export const NegociacaoProvider = ({ children }) => {
  const getNegociacao = async () => {
    if (localStorage.getItem("dados")) {
      await appMoveis
        .get("moveis/moveisquerocomprar")
        .then((res) => {
          const arrayMoveis = res.data.movel;

          for (let n in arrayMoveis) {
            if (arrayMoveis[n].situacao != 0) {
              setNegociacao(arrayMoveis[n].situacao);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getNegociacao();
  }, []);

  const [negociação, setNegociacao] = useState(0);

  const algumContext = negociação;
  return (
    <NegociacaoContext.Provider value={{ algumContext }}>
      {children}
    </NegociacaoContext.Provider>
  );
};
