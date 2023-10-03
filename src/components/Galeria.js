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
    }]);
    return (
        <>
            <section id="galeria" className="portfolio section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Galería</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
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
