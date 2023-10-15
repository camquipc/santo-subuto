import React from "react";
import { FileInput } from "./FileInput";

export default function Testimonio() {
  return (
    <>
      <section id="testimonio" className="resume d-movil-none">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Testimonios</h2>
            <h4>
              Comparte con nosotros tu testimonio de alguna vivencia que hayas
              tenido con el padre Jorge que evidencie su vida de santidad.
            </h4>
          </div>
          <div className="row mb-4">
            <div className="">
              <div className="col-sm-12 col-lg-8 mt-5 mt-lg-0 m-sm-auto mt-sm-0 m-md-auto mt-md-0 m-lg-auto archivos-container">
                <FileInput />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
