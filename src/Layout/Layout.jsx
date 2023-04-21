import NavFlotante from '../components/NavFloat';
import Footer from '../components/Footer';
import Portada from '../views/Portada';
import Etapas from '../views/Etapas';
import Skills from '../views/Skills';
import Portafolio from '../views/Portafolio';
import Colaboradores from '../views/Ceos';
import Formulario from '../views/Formulario';
import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import '../Layout.css';

const Layout = () => {
    return (
    <div>
        <NavFlotante />
            <Element name="section1">
                <section>
                    <Portada />
                </section>
            </Element>
            <Element name="section2">
                <section>
                <Etapas />
                </section>
            </Element>
            <Element name="section3">
                <section>
                <Skills />
                </section>
            </Element>
            <Element name="section4">
                <section>
                <Portafolio />
                </section>
            </Element>
            <Element name="section5">
                <section>
                <Colaboradores />
                </section>
            </Element>
            <Element name="section6">
                <section>
                <Formulario />
                </section>
            </Element>
        <Footer />
    </div>
    )
}

export default Layout;
