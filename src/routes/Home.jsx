import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="row">
      <h1 className="text-center py-3">Página do projeto</h1>
      <p>
        Olá a todos, eu me chamo
        <span className="fw-bold fs-6">"Caio Roberto Dos Anjos Santos"</span>,
        esse projeto de APP de venda de móveis, foi criado pensando em demostrar
        um pouco do nosso conhecimento adquirido durante os 8 meses do curso de
        programação Fullstack chamado "Reprograma-se", que foi realizado em
        parceria com o IFES, Instituto Federal do Espirito Santo,
        especificamente o campos de Cachoeiro de Itapemirim em parceria com a
        Action, Associação Capixaba de Tecnologia.
      </p>
      <p>
        Tenho que agradecer aos meus professores formadores e a minha professora
        mediadora, que durante os 8 meses se dedicaram para que tudo isso fosse
        possível de acontecer.
      </p>
      <p>
        Também não poderia deixar de agradecer a todos os profissionais que se
        envolveram nesse projeto, um projeto que começou com 1.140 alunos, em
        27/09/2022, que ao logo do trajeto encontraram diversas dificuldades de
        continuar o curso, muitos infelizmente tiveram que abondonar por
        diversos motivos, e chegar até aqui, sem dúvida é para nós encher de
        orgulho, meu sincero muito obrigado.
      </p>
      <div className="col-md-4 text-center">
        <a
          href="https://cachoeiro.ifes.edu.br/noticias/16787-abertas-as-inscricoes-para-processo-seletivo-para-o-curso-reprograme-se"
          target="_blank"
        >
          {" "}
          <img className="w-50" src="/img/ifes.png" alt="ifes" />
        </a>
      </div>
      <div className="col-md-4 text-center">
        <a href="https://reprograme-se.org.br/" target="_blank">
          <img
            className="w-50"
            src="/img/reprograma-se.png"
            alt="reprograma-se"
          />
        </a>
      </div>
      <div className="col-md-4 text-center my-5">
        <a
          href="https://action.org.es/acton-e-ifes-desenvolvem-programa-gratuito-de-capacitacao-em-programacao-em-software-para-jovens-e-adultos/"
          target="_blank"
        >
          <img className="w-50" src="/img/action.png" alt="action" />
        </a>
      </div>
    </div>
  );
};

export default Home;
