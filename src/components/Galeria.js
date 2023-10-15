import React, { useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const Galeria = () => {
  const [banners, setBanners] = useState([
    {
      id: "1",
      image:
        "https://firebasestorage.googleapis.com/v0/b/santo-subito-images.appspot.com/o/images%2Fdon55.jpg?alt=media&token=a428fc8b-18ce-4bdc-a92d-bef70b050e9e&_gl=1*44ktzs*_ga*MTc0NTUzNjEyMi4xNjkxMDkzMzQ3*_ga_CW55HF8NVT*MTY5NzQwNzY3OC43LjEuMTY5NzQwODYwMy41LjAuMA..",
      height: "720",
      width: "693",
    },

    {
      id: "4",
      image:
        "https://firebasestorage.googleapis.com/v0/b/santo-subito-images.appspot.com/o/images%2Fdon2.jpeg?alt=media&token=6247c124-2da6-43ca-bac5-1047dd8bc83c&_gl=1*pprzvz*_ga*MTc0NTUzNjEyMi4xNjkxMDkzMzQ3*_ga_CW55HF8NVT*MTY5NzQwNzY3OC43LjEuMTY5NzQwNzg2Ny44LjAuMA..",
      width: "780",
      height: "1040",
    },
    {
      id: "3",
      image:
        "https://firebasestorage.googleapis.com/v0/b/santo-subito-images.appspot.com/o/images%2Fdon1.jpg?alt=media&token=07c6349f-ac46-406f-8578-d0c46559ba19&_gl=1*1nz1sho*_ga*MTc0NTUzNjEyMi4xNjkxMDkzMzQ3*_ga_CW55HF8NVT*MTY5NzQwNzY3OC43LjEuMTY5NzQwNzcwNy4zMS4wLjA.",
      width: "1040px",
      height: "780px",
    },
    {
      id: "5",
      image:
        "https://firebasestorage.googleapis.com/v0/b/santo-subito-images.appspot.com/o/images%2Fdon6.jpg?alt=media&token=5896dfab-b5a8-46ce-8c8e-7f96f10630a3&_gl=1*1hesy24*_ga*MTc0NTUzNjEyMi4xNjkxMDkzMzQ3*_ga_CW55HF8NVT*MTY5NzQwNzY3OC43LjEuMTY5NzQwNzk3MC41NS4wLjA.",
      width: "1040px",
      height: "780px",
    },
    {
      id: "8",
      image:
        "https://firebasestorage.googleapis.com/v0/b/santo-subito-images.appspot.com/o/images%2Fdon4.png?alt=media&token=67b177ac-68a0-4970-b3a6-7bc697240817&_gl=1*2m0kal*_ga*MTc0NTUzNjEyMi4xNjkxMDkzMzQ3*_ga_CW55HF8NVT*MTY5NzQwNzY3OC43LjEuMTY5NzQwODExMi40MS4wLjA.",
      width: "1040px",
      height: "780px",
    },
    {
      id: "10",
      image:
        "https://firebasestorage.googleapis.com/v0/b/santo-subito-images.appspot.com/o/images%2Fdon11.jpg?alt=media&token=d5015ec4-c1c3-4269-b6f4-35ae0130e298&_gl=1*gc641e*_ga*MTc0NTUzNjEyMi4xNjkxMDkzMzQ3*_ga_CW55HF8NVT*MTY5NzQwNzY3OC43LjEuMTY5NzQwNzg0NC4zMS4wLjA.",
      width: "1040px",
      height: "780px",
    },
    {
      id: "9",
      image:
        "https://firebasestorage.googleapis.com/v0/b/santo-subito-images.appspot.com/o/images%2Fdon23.jpeg?alt=media&token=a204e730-5ff5-4449-9214-fa7835577ca0&_gl=1*15g5emy*_ga*MTc0NTUzNjEyMi4xNjkxMDkzMzQ3*_ga_CW55HF8NVT*MTY5NzQwNzY3OC43LjEuMTY5NzQwODA2OS4xOC4wLjA.",
      width: "1040px",
      height: "780px",
    },
    {
      id: "11",
      image:
        "https://firebasestorage.googleapis.com/v0/b/santo-subito-images.appspot.com/o/images%2Fdon10.jpeg?alt=media&token=c027a016-bad2-4892-9da2-4ed25b5c3e98&_gl=1*19tw5tk*_ga*MTc0NTUzNjEyMi4xNjkxMDkzMzQ3*_ga_CW55HF8NVT*MTY5NzQwNzY3OC43LjEuMTY5NzQwNzgyMC41NS4wLjA.",
      width: "1040",
      height: "780",
    },

    {
      id: "14",
      image:
        "https://firebasestorage.googleapis.com/v0/b/santo-subito-images.appspot.com/o/images%2Fdon26.jpeg?alt=media&token=97c2fbee-bf9f-42ca-8e11-f0d79c220283&_gl=1*1u7rlu1*_ga*MTc0NTUzNjEyMi4xNjkxMDkzMzQ3*_ga_CW55HF8NVT*MTY5NzQwNzY3OC43LjEuMTY5NzQwNzkyOS4yMS4wLjA.",
      width: "1040",
      height: "780",
    },
    {
      id: "15",
      image:
        "https://firebasestorage.googleapis.com/v0/b/santo-subito-images.appspot.com/o/images%2Fdon24.jpeg?alt=media&token=3edfe97c-38e9-4373-8bdf-bac643888997&_gl=1*1gs1ne3*_ga*MTc0NTUzNjEyMi4xNjkxMDkzMzQ3*_ga_CW55HF8NVT*MTY5NzQwNzY3OC43LjEuMTY5NzQwNzg5Ny41My4wLjA.",
      width: "1040",
      height: "780",
    },
    {
      id: "18",
      image:
        "https://firebasestorage.googleapis.com/v0/b/santo-subito-images.appspot.com/o/images%2Fdon25.jpeg?alt=media&token=613c3624-8088-4939-92ca-54a0ef6b2069&_gl=1*t9ugiy*_ga*MTc0NTUzNjEyMi4xNjkxMDkzMzQ3*_ga_CW55HF8NVT*MTY5NzQwNzY3OC43LjEuMTY5NzQwODA5My42MC4wLjA.",
      width: "1040",
      height: "780",
    },
  ]);
  return (
    <>
      <section id="galeria" className="portfolio section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Galería</h2>
            <h4>
              Con su testimonio de vida dio a conocer la gran humildad que lo
              caracterizaba, su amor a Dios y al más necesitado,quien siempre
              recibió de él una mano amiga.
            </h4>
          </div>
          <div className="galeria" data-aos="fade-up" data-aos-delay="200">
            {banners.map((item) => {
              return (
                <img
                  src={item.image}
                  className="galeria-imagen"
                  key={item.id}
                  loading="lazy"
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

//<img src={item.image} className="galeria-imagen" alt="logo" key={item.id} />;
