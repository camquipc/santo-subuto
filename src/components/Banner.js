import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';


export default function Banner() {

    const [banners, setBanners] = useState([{
        "id": "1",
        "title": "Padre Jorge Bissoni",
        "body": "Misionero de la caridad 12/05/40  17/09/2023",
        "image": "img/don5.png"
    },
    {
        "id": "2",
        "title": "Peregrinos del Señor",
        "body": "Fue su obra ejemplar, ofreciendoles amor, alegria y felicidad",
        "image": "img/don2.1.png"
    },
    {
        "id": "3",
        "title": "Sacerdote Cercano al Pueblo",
        "body": "Vivia y sufria con el, esto lo destacaba con humildad hacia los demás",
        "image": "img/don1.png"
    },
    {
        "id": "4",
        "title": "Padre Peregrino ",
        "body": "Nunca detuvo son andar y a maria nos enseño a venerar",
        "image": "img/don.png"
    },
    {
        "id": "5",
        "title": "Fiel Ejemplo de Humildad ",
        "body": "Al mas necesitado ayudo sin desmayar",
        "image": "img/don4.1.png"
    }]);
    return (
        <Carousel>
            {
                banners.map(item => {
                    return (
                        <Carousel.Item key={item.id} className="bi">
                            <img src={item.image} className="img-banner" />
                            <Carousel.Caption className="mb-3 ">
                                <h1>{item.title}</h1>
                                <h3>{item.body}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })
            }
        </Carousel>

    )
}








