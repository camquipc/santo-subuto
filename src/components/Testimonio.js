import React from "react";
import { FileUpload } from "./FileUpload";

/*
Comparte con nosotros tu testimonio de alguna vivencia que hayas
              tenido con el padre Jorge que evidencie su vida de santidad.

*/

export default function Testimonio() {
  return (
    <>
      <section id="testimonio" className="resume testimonio-new">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Testimonios</h2>
            <h4>
              Comparte con nosotros tu testimonio de alguna vivencia que hayas
              tenido con el padre Jorge que evidencie que vivió la fe, la
              esperanza y la caridad de forma heróica.
            </h4>
          </div>
          <div className="row mb-4">
            <div className="testimonio-conten-mov">
              <div className="col-sm-12 col-lg-8 mt-5 mt-lg-0 m-sm-auto mt-sm-0 m-md-auto mt-md-0 m-lg-auto">
                <FileUpload />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
