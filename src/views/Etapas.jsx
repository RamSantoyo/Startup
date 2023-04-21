import React from "react";
import styled from "styled-components";
//importar imagen
import imagen from "../assets/person.png";

const Imgcnt = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    & img {        
        position: relative;
        width: 100%;
    }
    @media (max-width: 768px) {
        margin-top: 15rem;
    }
`;

const Ecnt = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    align-items: center;
    margin-top: -2rem;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1rem;
        margin-top: 1rem;
    }
`;

const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: .1rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0,0,0,0.2);
    backdrop-filter: blur(1px);
    background: hsla(0,0%,100%,.08);
    & h1 {
        font-size: 3rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 1rem;
        text-align: center;
    }
    & h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }
`;

const Etapas = () => {
    return (
        <section className="container completo">
            <Imgcnt>
                <img src={imagen} alt="imagen" className="etapas__img" />
            </Imgcnt>            
            <Ecnt>                
                <Card>
                    <h1>Desing</h1>
                    <h3 className="etapas__titulo">01-Desing</h3>
                    <p className="etapas__parrafo">En nuestro estudio, la estructura y prototipo son la base sólida para crear diseños funcionales y atractivos.

                    </p>
                    <h3 className="etapas__titulo">02-Ux/Ui</h3>
                    <p>
                    Creamos experiencias de usuario y diseños de interfaz en nuestro estudio, enfocados en la funcionalidad y la estética de los proyectos.
                    </p>
                </Card>
                <Card className="transparent">
                    <h1>Frontend</h1>
                    <h3 className="etapas__titulo">01-Layout</h3>
                    <p className="etapas__parrafo">Diseños atractivos y funcionales. Experiencia del usuario optimizada en nuestro estudio.
                    </p>
                    <h3 className="etapas__titulo">02-Frontend</h3>
                    <p>
                    Interfaces interactivas y funcionales. Experiencia de usuario fluida y intuitiva. Alta calidad en proyectos web en nuestro estudio.
                    </p>
                </Card> 
                <Card className="transparent">
                    <h1>Backend</h1>
                    <h3 className="etapas__titulo">01-Desarrollo Eficiente</h3>
                    <p className="etapas__parrafo">Nuestro enfoque incluye metodologías y arquitectura probadas para el desarrollo eficiente y de calidad de proyectos.
                    </p>
                    <h3 className="etapas__titulo">02-Integraciones y APIs</h3>
                    <p>
                    Creamos soluciones personalizadas para conectar sistemas y aplicaciones, asegurando una comunicación eficiente y segura de datos.
                    </p>
                </Card>                 
             </Ecnt>
        </section>        
    )
}

export default Etapas;

