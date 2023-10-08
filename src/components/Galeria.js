import React, { useState } from 'react'

export const Galeria = () => {
    const [banners, setBanners] = useState([{
        "id": "1",
        "image": "img/don5.jpg"
    },
    {
        "id": "7",
        "image": "img/don4.png"
    },
    {
        "id": "2",
        "image": "img/don.jpg"
    },
    {
        "id": "4",
        "image": "img/don2.jpeg"
    },
    {
        "id": "3",
        "image": "img/don1.jpg"
    },
    {
        "id": "5",
        "image": "img/don6.jpg"
    }, {
        "id": "8",
        "image": "img/don4.png"
    }, {
        "id": "10",
        "image": "img/don11.jpg"
    }, {
        "id": "9",
        "image": "img/don23.jpeg"
    }, {
        "id": "11",
        "image": "img/don10.jpeg"
    }]);
    return (
        <>
            <section id="galeria" className="portfolio section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Galería</h2>
                        <h4>Con su testimonio de vida dio a conocer la gran humildad que lo caracterizaba, su amor a Dios y al más necesitado,quien siempre recibió de él una mano amiga.</h4>
                    </div>
                    <div className="galeria" data-aos="fade-up" data-aos-delay="200">
                        {
                            banners.map(item => {
                                return (
                                    <img src={item.image} className="galeria-imagen" alt="logo" key={item.id} />
                                );
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}
