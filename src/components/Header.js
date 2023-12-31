import React from "react";

import {
  BsFillHouseFill,
  BsCameraVideoFill,
  BsCardImage,
  BsFilePersonFill,
  BsFillCaretRightSquareFill,
  BsFillPostcardHeartFill,
  BsFillEnvelopeAtFill,
  BsBoxArrowUp,
} from "react-icons/bs";
//import { FileInput } from "./FileInput";
export default function Header() {
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto active">
                <BsFillHouseFill /> <span>Inicio</span>
              </a>
            </li>
            <li>
              <a href="#canonizacion" className="nav-link scrollto">
                <BsFillPostcardHeartFill /> <span>Canonización</span>
              </a>
            </li>
            <li>
              <a href="#biografia" className="nav-link scrollto">
                <BsFilePersonFill /> <span>Biografía</span>
              </a>
            </li>
            <li>
              <a href="#galeria" className="nav-link scrollto">
                <BsCardImage /> <span>Galería</span>
              </a>
            </li>
            <li>
              <a href="#videos" className="nav-link scrollto">
                <BsFillCaretRightSquareFill /> <span>Videos</span>
              </a>
            </li>
            <li>
              <a href="#testimonio" className="nav-link scrollto">
                <BsCameraVideoFill /> <span>Testimonio</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container z-inde">
          <h1>Padre Jorge Bissoni</h1>
          <h1 className="mt-3">Sacerdote de la Caridad</h1>
          <p className="col-sm-12 col-lg-7 col-md-12">
            "Los santos no sólo están en estampitas, también están en las
            calles, donando su vida por amor a los demás. Si eso no es ser
            santo, entoces ¿Qué lo será?"
          </p>
          <div className="social-links">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>

          <div className=" d-sm-block d-md-none d-lg-none archivos-container">
            <button className="btn btn-sm lb-btn mb-2 mt-4">
              <a href="#testimonio" style={{ color: "#fff" }} >Subir Testimonio</a>
            </button>
          </div>
        </div>
      </section >
    </>
  );
}
