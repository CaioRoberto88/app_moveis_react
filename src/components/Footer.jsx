import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p className="text-center">
        {" "}
        APP Móveis <br /> &copy; Todos os direitos reservados - 2023
      </p>
      <p className="text-center">
        Desenvolvido por
        <Link to="https://www.linkedin.com/in/caio-roberto-844a3324a/">
          {" "}
          <span className="my-linkedin">Caio Roberto</span>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
