import React from "react";
import styled from "styled-components";
import Nav from '../components/Nav';
import imagen from "../assets/person.png";

const Fondo = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at left center, rgba(0, 10, 99, 0.664) 0%, rgba(0,0,0,0) 15%),
      radial-gradient(circle at right center, rgba(0, 10, 99, 0.664) 0%, rgba(0,0,0,0) 15%); 
    background-repeat: no-repeat; 
    background-size: cover;
    z-index: -1;
`;

const Transparent = styled.div`
    backdrop-filter: blur(1px);
    background: hsla(0,0%,100%,.02);
    display: flex;
    justify-content: center;
    align-items: center;    
`;

const Titulo = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1rem;
    @media (max-width: 768px) {
        font-size: 1.2rem;
        letter-spacing: 0.5rem;
        margin-top: -20rem;
    }
`;

const Parrafo = styled.p`
    font-size: 1rem;
    color: #fff;
    text-align: center;
    margin-top: 2rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    @media (max-width: 768px) {
        font-size: 0.8rem;
        letter-spacing: 0.2rem;
        margin-top: 1rem;
    }
`;

const Contenido = styled.div`
    width: 80%;
    max-width: 1200px;
    margin-top: -10%;
`;



const Portada = () => {
    return (
        <Fondo>
            <Nav />
            <Transparent className="completo">
                <Contenido>
                    <Titulo>Innovación Tecnológica para el Futuro Digital</Titulo>
                    <Parrafo>DA VIDA A TUS PROYECTOS MÁS COMPLEJOS. ESPECIALISTAS EN SOLUCIONES DIGITALES, DESARROLLO WEB AVANZADO E INNOVACIÓN TECNOLÓGICA.</Parrafo>                  
                </Contenido>
            </Transparent>           
        </Fondo>
    )
}

export default Portada;

