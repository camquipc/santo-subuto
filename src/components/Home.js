import React from "react";
import Header from "./Header";
import Testimonio from "./Testimonio";
import { About } from "./About";
import { Galeria } from "./Galeria";
import { Footer } from "./Footer";
import ProcesoSanto from "./ProcesoSanto";
import MenuMovil from "./MenuMovil";
import Videos from "./Videos";
import Banner from "./Banner";
import MasFotos from "./MasFotos";

function Home() {
  return (
    <>
      <MenuMovil />
      <Header />
      <Banner />
      <ProcesoSanto />
      <About />
      <Galeria />
      <MasFotos />
      <Videos />
      <Testimonio />
      <Footer />
    </>
  );
}

export default Home;
