import React from 'react'
import styled from "styled-components"
import persons from "../assets/persons.png";

const CntSkill = styled.section`    
    margin-top: 10%;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        margin-top: 200%;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    align-items: center;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Persons = styled.img`
    width: 100%;
`;

const DivPers = styled.div`
    width: 100%;
`;

const H2 = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    margin-top: -10%;
    margin-bottom: 8%;
    text-align: center;
    letter-spacing: 1rem;
    @media (max-width: 768px) {
        font-size: 2rem;
        letter-spacing: 0.5rem;
        margin-top: 100%;
        margin-bottom: 30%;
    }
`;

const Skill = styled.section`
    display : grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Tarjeta = styled.div`
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    margin: 1rem;
    & h3 {
        text-transform: uppercase;
        font-size: 1.3rem;
        margin: 1rem;
    }
    &:hover{
        transform: scale(1.1);
        background: #fff;
        color: black;

    }

`;

const ImgPers = () => {
    return (
        <DivPers>
            <Persons src={persons} alt="imagen" className="etapas__img" />
        </DivPers>
    )
}

const Subtitle = () => {
    return (
        <H2>Tecnologias</H2>
    )
}

const Skills = () => {
    return (
        <CntSkill className="container completo seccion">
            <Subtitle />
            <Grid>
                <ImgPers />
                <Skill>
                    <Tarjeta>
                        <h3>HTML</h3>
                    </Tarjeta>
                    <Tarjeta>
                        <h3>CSS</h3>
                    </Tarjeta>
                    <Tarjeta>
                        <h3>JS</h3>
                    </Tarjeta>
                    <Tarjeta>
                        <h3>React</h3>
                    </Tarjeta>
                    <Tarjeta>
                        <h3>Node</h3>
                    </Tarjeta>
                    <Tarjeta>
                        <h3>VUE JS</h3>
                    </Tarjeta>
                    <Tarjeta>
                        <h3>java</h3>
                    </Tarjeta>
                    <Tarjeta>
                        <h3>MongoDB</h3>
                    </Tarjeta>
                    <Tarjeta>
                        <h3>Nube</h3>
                    </Tarjeta>
                </Skill>
            </Grid>
        </CntSkill>
    )
}

export default Skills