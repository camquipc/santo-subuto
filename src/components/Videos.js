import React from "react";
import ReactPlayer from "react-player";

export default function Videos() {
  return (
    <>
      <section id="videos" className="portfolio section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Videos</h2>
          </div>
          <div className="row mt-4">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <ReactPlayer
                url="https://firebasestorage.googleapis.com/v0/b/santo-subito-images.appspot.com/o/videos%2Fdon2.mp4?alt=media&token=587dec66-75d7-4d86-9bdd-27ee3aab6db8"
                controls
                width={"100%"}
                loading="lazy"
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <ReactPlayer
                url="https://firebasestorage.googleapis.com/v0/b/santo-subito-images.appspot.com/o/videos%2Fdon1.mp4?alt=media&token=b75d32bb-54c6-4ae3-bdbb-1e6956cab1e4"
                controls
                width={"100%"}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
