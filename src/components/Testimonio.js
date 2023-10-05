import React from 'react'

export default function Testimonio() {
    return (
        <>
            <section id="testimonio" className="resume">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Testimonios</h2>
                        <p>Comparte con nosotros tu testimonio de alguna vivencia que hayas tenido con el padre Jorge que evidencie su vida de santidad.</p>
                    </div>
                    <div className="row">
                        <div className="row mt-1">
                            <div className="col-sm-12 col-lg-8 mt-5 mt-lg-0 m-sm-auto mt-sm-0 m-md-auto mt-md-0 m-lg-auto archivos-container">
                                <p>Arrastre los testimonios a esta zona o <label htmlFor="archivos" id="lb-btn">Haga click aquí</label></p>
                                <input type='file' multiple name='archivos' id='archivos' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
