import React from 'react';
import styled from "styled-components";
import Logo from './Logo';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Enlace = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        color: #4717f6;
        transition: all 0.2s ease-in-out;
    }
`;

const Boton = styled.button`
    cursor: pointer;
    background: #4717f6;
    color: #fff;
    font-size: .9rem;
    font-weight: 600;
    text-transform: uppercase;
    padding: 1rem 1rem;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background: #fff;
        color: #4717f6;
        transition: all 0.3s ease-in-out;
        transform: translateX(5px); /* Mover 5px a la derecha /
        animation: bounce 0.5s infinite; / Agregar animación de rebote */
        }
        
        @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
        transform: translateY(0); /* Sin movimiento en los otros ejes /
        }
        40% {
        transform: translateY(-5px); / Rebote hacia arriba /
        }
        60% {
        transform: translateY(-3px); / Rebote hacia abajo */
        }
`;

// Crea el nav y el footer
const Nav = () => {
    return (
        <nav className="nav transparent">
            <div className='container cnt-nav'>
                <Logo />
                <ul className='nav-links'>
                    <li>
                        <Enlace
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Sección 1
                        </Enlace>
                    </li>
                    <li>
                        <Enlace
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Sección 2
                        </Enlace>
                    </li>
                    <li>
                        <Enlace
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Sección 3
                        </Enlace>
                    </li>
                </ul>
                <Boton>
                    Comienza tu viaje
                    <i className="fa-solid fa-circle-chevron-right"></i>
                </Boton>
            </div>
        </nav>
    )
}

export default Nav;