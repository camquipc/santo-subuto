import React from "react";

import { BsCheckCircleFill } from "react-icons/bs";

const ProcesoSanto = () => {
  return (
    <section id="canonizacion" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>La Canonización</h2>
          <h4>
            El proceso de canonización implica una serie de etapas que conducen a la proclamación de una persona como santa.
          </h4>
        </div>

        <div className="row">
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200">
            <div className="icon-box iconbox-orange ">
              <div className="icon">
                <img className="pc-icon" src="img/pc2.png" />
              </div>
              <h4>
                <a href="">Siervo de Dios</a>
              </h4>
              <p>
                La congregación para la causa de los santos examina y
                aprueba el informe.
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="300">
            <div className="icon-box iconbox-pink">
              <div className="icon">
                <img className="pc-icon" src="img/pc3.png" />
              </div>
              <h4>
                <a href="">Venerable</a>
              </h4>
              <p>
                La santa sede reconoce que la persona vivió virtudes
                heroicas.
              </p>
            </div>
          </div>


          <div
            className="col-sm-12 col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="100">
            <div className="icon-box iconbox-yellow">
              <div className="icon">
                <img className="pc-icon" src="img/pc4.png" />
              </div>
              <h4>
                <a href="">Beatificación</a>
              </h4>
              <p>El papa confirma que ha hecho un milagro.</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="200">
            <div className="icon-box iconbox-red">
              <div className="icon">
                <img className="pc-icon" src="img/pc5.png" />
              </div>
              <h4>
                <a href="">Canonización</a>
              </h4>
              <p>Si un segundo milagro es confirmado. </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="section-title">
            <h2>¿Que hay para hacer?</h2>
          </div>

          <ul className="ul-solicitud">
            <li>
              <p>
                <BsCheckCircleFill /> Elaboración de la carta al Obispo para solicitarle el inicio del proceso de la causa de canonizacion.
              </p>
            </li>
            <li>
              <p>
                <BsCheckCircleFill /> Iniciar  la recoleción de firmas durantes estos 40 dias (El cuarentón), las cuales serán entregadas al Obispo y
                complementarán el expediente de la causa.
              </p>
            </li>
            <li>
              <p>
                <BsCheckCircleFill /> Dar inicio a la recoleción de testimonios, que serán parte del expediente para su causa.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section >
  );
};

export default ProcesoSanto;


