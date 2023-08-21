import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//ROUTER
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//CONTEXT
import { QtdProvider } from "../src/context/QtdContext";

//PAGINAS
import Home from "./routes/Home";
import Login from "./routes/Login";
import CadastroUsuario from "./routes/CadastroUsuario";
import Moveis from "./routes/Moveis";
import CadastroMovel from "./routes/CadastroMovel.jsx";
import MovelDetalhes from "./routes/MovelDetalhes.jsx";
import Perfil from "./routes/Perfil.jsx";
import MeusMoveis from "./routes/MeusMoveis.jsx";
import MoveisEmNegociacao from "./routes/MoveisEmNegociacao";
import { NegociacaoProvider } from "./context/NegociacaoContext.jsx";

//CONFIGURANDO AS ROTAS
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cadastrousuario",
        element: <CadastroUsuario />,
      },
      {
        path: "/moveis",
        element: <Moveis />,
      },
      {
        path: "/cadastromovel",
        element: <CadastroMovel />,
      },
      {
        path: "/moveldetalhes/:id",
        element: <MovelDetalhes />,
      },
      {
        path: "/perfil/:id",
        element: <Perfil />,
      },
      {
        path: "/meusmoveis",
        element: <MeusMoveis />,
      },
      {
        path: "/moveisemnegociacao",
        element: <MoveisEmNegociacao />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QtdProvider>
      <NegociacaoProvider>
        <RouterProvider router={router} />
      </NegociacaoProvider>
    </QtdProvider>
  </React.StrictMode>
);
