import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";

const Foot = styled.footer`
    width: 100%;
    @media (max-width: 768px) {
        margin-top: 50%;
    }
`;

const CntFoot = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
`;

const Parrafo = styled.p`
    color: #fff;
    font-size: .5rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
`;

const CntLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Derechos = styled.p`
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
`;

const Footer = () => {
    return (
        <Foot className="container seccion">
            <CntFoot >
                <CntLogo>
                    <Logo />
                    <Parrafo>Juntos podemos lograrlo</Parrafo>
                </CntLogo>    
            </CntFoot>
            <Derechos>© 2021 LosDvlopeR. Todos los derechos reservados.</Derechos>
        </Foot>
    )
}

export default Footer;