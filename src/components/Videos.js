import React from 'react'

export default function Videos() {
    return (
        <>
            <section id="videos" className="portfolio section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Videos</h2>
                    </div>

                    <div className='row mt-4'>
                        <div className='col'>
                            <video width="640" height="360" controls className='img-thumbnail'>
                                <source src='video/don2.mp4' type="video/mp4" />
                            </video>
                        </div>
                        <div className='col'>

                            <video width="640" height="370" controls className='img-thumbnail'>
                                <source src='video/don1.mp4' type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
