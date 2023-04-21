import styled from "styled-components";
import React from 'react';


const EstiloLogo = styled.div`
    display: flex;
    justify-content: space-between;
    h1 {
        font-size: 2rem;
        font-weight: 600;        
    }
    .azul {
        color: #4717f6;
    }
    .blanco {
        color: #fff;        
    }
`;
const Logo = () => {
    return (
        <EstiloLogo>
            <h1 className="azul">L</h1>
            <h1 className="blanco">osD</h1>
            <h1 className="blanco">vlope</h1>
            <h1 className="azul">R</h1>
            <h1 className="blanco">s</h1>
            <h1 className="azul">.</h1>
        </EstiloLogo>
    )
}



export default Logo;