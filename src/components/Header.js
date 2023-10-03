import React from 'react'

import { BsFillHouseFill, BsCameraVideoFill, BsCardImage, BsFilePersonFill, BsFillEnvelopeFill } from "react-icons/bs";
export default function Header() {
    return (
        <>
            <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
            <header id="header" className="d-flex flex-column justify-content-center">
                <nav id="navbar" className="navbar nav-menu">
                    <ul>
                        <li><a href="#hero" className="nav-link scrollto active"><BsFillHouseFill /> <span>Inicio</span></a></li>
                        <li><a href="#biografia" className="nav-link scrollto"><BsFilePersonFill /> <span>Biografía</span></a></li>
                        <li><a href="#galeria" className="nav-link scrollto"><BsCardImage /> <span>Galería</span></a></li>
                        <li><a href="#testimonio" className="nav-link scrollto"><BsCameraVideoFill /> <span>Testimonio</span></a></li>
                    </ul>
                </nav>

            </header>


            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container z-inde">
                    <h1>Padre Jorge Bissoni</h1>
                    <h1 >Sacerdote de la Caridad</h1>
                    <p className='col-sm-12 col-lg-7 col-md-12'>"Los santos no sólo están en estampitas, también están en las calles, donando su vida por amor a los demás. Si eso no es ser santo, entoces ¿Qué lo será?"</p>
                    <div className="social-links">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </section>
        </>
    )
}
