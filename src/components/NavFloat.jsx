import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { useState } from 'react';
import styled from 'styled-components';


const Nav = styled.nav`
    position: fixed;
    top: 45%;
    left: 90%;
    right: 0;
    z-index: 9999;
`;

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    .fa-circle {
        cursor: pointer;
        color: #fff;
    }
`;

const NavFlotante = () => {
    // Estado para almacenar la sección activa
    const [activeSection, setActiveSection] = useState('section1');

    // Función para manejar el cambio de sección activa
    const handleSetActiveSection = (section) => {
        setActiveSection(section);
    }

    return (
        <Nav>
            <div>
                <Ul>
                    <li>
                        <Link
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onSetActive={() => handleSetActiveSection('section1')}
                        >
                            {activeSection === 'section1' ? (
                                <i className="fa-solid fa-circle"></i>
                            ) : (
                                <i className="fa-regular fa-circle"></i>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onSetActive={() => handleSetActiveSection('section2')}
                        >
                            {activeSection === 'section2' ? (
                                <i className="fa-solid fa-circle"></i>
                            ) : (
                                <i className="fa-regular fa-circle"></i>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onSetActive={() => handleSetActiveSection('section3')}
                        >
                            {activeSection === 'section3' ? (
                                <i className="fa-solid fa-circle"></i>
                            ) : (
                                <i className="fa-regular fa-circle"></i>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onSetActive={() => handleSetActiveSection('section4')}
                        >
                            {activeSection === 'section4' ? (
                                <i className="fa-solid fa-circle"></i>
                            ) : (
                                <i className="fa-regular fa-circle"></i>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="section5"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onSetActive={() => handleSetActiveSection('section5')}
                        >
                            {activeSection === 'section5' ? (
                                <i className="fa-solid fa-circle"></i>
                            ) : (
                                <i className="fa-regular fa-circle"></i>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="section6"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onSetActive={() => handleSetActiveSection('section6')}
                        >
                            {activeSection === 'section6' ? (
                                <i className="fa-solid fa-circle"></i>
                            ) : (
                                <i className="fa-regular fa-circle"></i>
                            )}
                        </Link>
                    </li>
                </Ul>
            </div>
        </Nav>
    )
}

export default NavFlotante;