import axios from "axios";

let dados = JSON.parse(localStorage.getItem("dados"));

if (dados == undefined) {
  let token;
  token = dados = {};
}

const token = dados.token;

const appMoveis = axios.create({
  baseURL:
    "https://backend-api-app-moveis-reprograma-se-2023.caioroberto8.repl.co/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default appMoveis;
