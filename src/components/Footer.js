import React from "react";


import { BsFillEnvelopeFill, BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
export const Footer = () => {
  return (
    <footer id="footer">
      {/* <div className="container">
        <div className="copyright">

          <strong>
            <span>
              {" "}
              <BsFillEnvelopeFill /> santosubito@santo-subito.org
            </span>
          </strong>

          <strong>
            <span>

            </span>
          </strong>

          <strong>
            <span>
              {"  "}
              <a href="descargas/doc.pdf" download={"padre_jorge_resumen.pdf"}><BsFillFileEarmarkArrowDownFill /> Descargar Biografía</a>
            </span>
          </strong>
        </div>
      </div>*/}
      <div className="container">
        <div className="copyright">

          <strong>
            <span>
              Copyright &copy; 2023 Francisco Campos
            </span>
          </strong>
        </div>
      </div>
    </footer>
  );
};
