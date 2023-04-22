import React from 'react';
import styled from "styled-components";
import img1 from "../assets/rams.jpg";
import img2 from "../assets/leonel.jpg"

const CntColaboradores = styled.section`
    width: 100%;
`;

const Fundadores = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    letter-spacing: 1rem;
    margin-top: -4rem;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        font-size: 2rem;
        letter-spacing: 0.2rem;
        margin-top: 20%;
        margin-bottom: 30%;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    align-items: center;
    padding: 1rem 22rem;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 1rem 2rem;
    }
`;

const Img = styled.img`
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
    filter: grayscale(100%);
    transition: all 0.3s ease-out;
    &:hover{
        transform: scale(1.1);
        filter: grayscale(0%);
    }
`;

const Divimg = styled.div`
    display: inline-block;
    position: relative;
    text-align: center;
`;

const Colaboradores = () => {
    return (
        <CntColaboradores className="container seccion">
            <Fundadores>Colaboradores</Fundadores>
            <Grid>
                <Divimg>
                    <Img src={img1} alt="colaborador-1" border="0" />
                    <h3>Ramsess S.</h3>
                    <p>Frontend Developer</p>
                </Divimg>
                <Divimg>
                    <Img src={img2} alt="colaborador-1" border="0" />
                    <h3>Leonel C.</h3>
                    <p>Backend Developer</p>
                </Divimg>
            </Grid>
        </CntColaboradores>
    );
}

export default Colaboradores;