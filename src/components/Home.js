import React from 'react'
import Header from './Header'
import Testimonio from './Testimonio';
import { About } from './About';
import { Galeria } from './Galeria';
import { Footer } from './Footer';
import ProcesoSanto from './ProcesoSanto';
import MenuMovil from './MenuMovil';
import Videos from './Videos';

function Home() {
    return (
        <>
            <MenuMovil />
            <Header />
            <ProcesoSanto />
            <About />
            <Galeria />
            <Videos />
            <Testimonio />
            <Footer />
        </>
    )
}

export default Home