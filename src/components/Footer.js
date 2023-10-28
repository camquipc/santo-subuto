import React from "react";

import { BsFillEnvelopeFill, BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
export const Footer = () => {
  return (
    <footer id="footer" className="mt-5">
      <div className="container">
        <div className="copyright">

          <strong>
            <span>
              {" "}
              <BsFillEnvelopeFill /> ssubito47@gmail.com
            </span>
          </strong>

          <strong>
            <span>
              {"  "}
              <a href="#"><BsFillFileEarmarkArrowDownFill /> Descargar Biografía</a>
            </span>
          </strong>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy;
          <strong>
            <span>
              {" "}
              2023, Desarrollado por Francisco Campos
            </span>
          </strong>
        </div>
      </div>
    </footer>
  );
};
