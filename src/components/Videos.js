import React from "react";
import ReactPlayer from 'react-player';

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
              <ReactPlayer url='video/don2.mp4' controls width={'100%'} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <ReactPlayer url='video/don1.mp4' controls width={'100%'} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
