import React from 'react'
import Header from './Header'
import Testimonio from './Testimonio';
import { About } from './About';
import { Galeria } from './Galeria';
import { Footer } from './Footer';
import ProcesoSanto from './ProcesoSanto';

function Home() {
    return (
        <>
            <Header />
            <ProcesoSanto />
            <About />
            <Galeria />
            <Testimonio />
            <Footer />
        </>
    )
}

export default Home