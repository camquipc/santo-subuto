import React, { useState } from "react";

import Slider from "./Slider";

export default function Banner() {
  const [banners, setBanners] = useState([
    {
      id: "2",
      title: "Peregrinos del Señor",
      body: "Fue su obra ejemplar, ofreciendoles amor, alegria y felicidad",
    },
    {
      id: "3",
      title: "Sacerdote Cercano al Pueblo",
      body: "Vivia y sufria con el, esto lo destacaba con humildad hacia los demás",
    },
    {
      id: "4",
      title: "Padre Peregrino ",
      body: "Nunca detuvo son andar y a María nos enseño a venerar",
    },
    {
      id: "5",
      title: "Fiel Ejemplo de Humildad ",
      body: "Al mas necesitado ayudo sin desmayar",
    },
  ]);
  return (
    <div className="sus-frases">
      <Slider childrens={banners} />
    </div>
  );
}
