import React from "react";
import styled from "styled-components";

import img1 from "../assets/porta-1.png";
import img2 from "../assets/porta-2.png";
import img3 from "../assets/porta-3.png";
import img4 from "../assets/porta-4.png";

const CntPortafolio = styled.section`
    width: 100%;
`;

const H1 = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    letter-spacing: 1rem;
    @media (max-width: 768px) {
        font-size: 2rem;
        letter-spacing: 0.5rem;
        margin-top: 100%;
    }
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    align-items: center;
    padding: 5rem;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
`;

const Card = styled.div`
    background: #fff;    
    cursor: pointer;
    transition: all 0.3s ease;
    & img {
        width: 100%;
    }
`;

const Div = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
`;

const Boton = styled.button`
    cursor: pointer;
    background: #4717f6;
    color: #fff;
    font-size: .9rem;
    font-weight: 600;
    text-transform: uppercase;
    padding: 1rem 4rem;
    margin: 1rem;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;        
    &:hover {
        background: #fff;
        color: #4717f6;
        transition: all 0.3s ease-in-out;
        transform: translateX(5px); /* Mover 5px a la derecha /
        animation: bounce 0.5s infinite; / Agregar animación de rebote */
        border: 1px solid #4717f6;
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

const Portafolio = () => {
    return(
        <CntPortafolio className="container">
            <H1>Portafolio</H1>
            <Cards>
                <Card>
                    <img src={img1} alt="porta-1" />
                    <Div>
                        <Boton>
                            Ver
                            <i className="fa-solid fa-circle-chevron-right"></i>
                        </Boton>
                    </Div>                   
                </Card>
                <Card>
                    <img src={img2} alt="porta-2" />
                    <Div>
                        <Boton>
                            Ver
                            <i className="fa-solid fa-circle-chevron-right"></i>
                        </Boton>
                    </Div>  
                </Card>
                <Card>
                    <img src={img3} alt="porta-3" />
                    <Div>
                        <Boton>
                            Ver
                            <i className="fa-solid fa-circle-chevron-right"></i>
                        </Boton>
                    </Div>  
                </Card>
                <Card>
                    <img src={img4} alt="porta-4" />
                    <Div>
                        <Boton>
                            Ver
                            <i className="fa-solid fa-circle-chevron-right"></i>
                        </Boton>
                    </Div>  
                </Card>
            </Cards>    
        </CntPortafolio>    
    );
}

export default Portafolio;