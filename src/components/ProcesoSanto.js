import React from "react";

import { BsCheckCircleFill } from "react-icons/bs";

const ProcesoSanto = () => {
  return (
    <section id="canonizacion" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>La Canonización</h2>
          <h4>
            Es el proceso que se lleva a cabo para una persona pueda convertirse
            en Santo. Dicho proceso se da en varias etapas.
          </h4>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <div className="row mb-3 ">
              <div
                className="centrar_contenido col-lg-12 m-lg-auto col-md-6 m-md-auto d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100">
                <div className="icon-box iconbox-blue ">
                  <div className="icon">
                    <img className="pc-icon" src="img/pc1.png" />
                  </div>
                  <h4>
                    <a href="">Postulación</a>
                  </h4>
                  <p>
                    El obispo diocesano y el postulador de la causa piden
                    iniciar el proceso de canonización tras realizar una
                    exhaustiva averiguación con personas que conocieron al
                    candidato para saber si en verdad su vida fue ejemplar y
                    virtuosa.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mb-3 ">
              <div
                className="centrar_contenido col-lg-12 m-lg-auto col-md-6 m-md-auto d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100">
                <div className="icon-box iconbox-blue ">
                  <h4 className="mt-3">¿Cómo vamos?</h4>
                  <ul className="ul-solicitud">
                    <li>
                      <p>
                        <BsCheckCircleFill /> Elaborar carta de solicitud.
                      </p>
                    </li>
                    <li>
                      <p>
                        <BsCheckCircleFill /> Recolección de firmas
                      </p>
                    </li>
                    <li>
                      <p>
                        <BsCheckCircleFill /> Solicitar formalmente el inicio
                        del proceso.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row mb-3">
              <div
                className="col-lg-6 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
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
                className="col-lg-6 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
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
            </div>
            <div className="row">
              <div
                className="col-sm-12 col-lg-6 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
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
                className="col-lg-6 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcesoSanto;
