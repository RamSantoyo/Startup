import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';


const CntForm = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    align-items: center;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
`;

const Fieldset = styled(Field)`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    background-color: transparent;
    color: #fff;
    font-size: 1.2rem;
    display: block;
    width: 80%;
    margin-bottom: 2rem;
`;

const Card = styled.div`
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
`;

const TitleForm = styled.div`
    font-size: 2rem;
    font-weight: 700;
    margin-top: -6rem;
    color: #fff;
    letter-spacing: .2rem;
    & span {
        color: #4717f6;
    }
    & i {
        color: #4717f6;
    }
    @media (max-width: 768px) {
        font-size: 1.5rem;
        letter-spacing: .1rem;
        margin-top: -4rem;
    }
`;

const Label = styled.label`
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: .5rem;
`;

const Btn = styled.button`
    cursor: pointer;
    background: #4717f6;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem 2rem;
    margin: 1rem;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background: #fff;
        color: #4717f6;
        transition: all 0.3s ease-in-out;
    }
`;

const Error = styled(ErrorMessage)`
    position: absolute;
    color: red;
    font-size: 1rem;
    font-weight: 700;
    margin-top: -2rem;
`;

const Formi = () => {
    return (
            <Formik
                initialValues={{ name: '', email: '', phone: '', message: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    } else if (values.name.length < 10) {
                        errors.name = 'Debe tener al menos 10 caracteres';
                    }
                    if (!values.email) {
                        errors.email = 'Required';
                    }
                    if (!values.phone) {
                        errors.phone = 'Required';
                    } else if (values.phone.length !== 10) {
                        errors.phone = 'Debe tener 10 caracteres';
                    }
                    if (!values.message) {
                        errors.message = 'Required';
                    }  else if (values.message.length < 10 || values.message.length > 200) {
                        errors.message = 'Su texto debe tener entre 10 y 200 caracteres';
                    }      
                    return errors;
                }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <div>
                        <Label htmlFor="name">Nombre</Label>
                        <Fieldset id="name" name="name" placeholder="Name" />
                        <Error name="name" component="span" />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Fieldset
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                        />
                        <Error name="email" component="span" />
                    </div>
                    <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Fieldset
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            type="phone"
                        />
                        <Error name="phone" component="span" />
                    </div>
                    <div>
                        <Label htmlFor="message">Escribenos una breve descripción de tu proyecto</Label>
                        <Fieldset id="message" name="message" placeholder="Message" />
                        <Error name="message" component="span" />
                    </div>
                    <Btn type="submit">Enviar</Btn>
                </Form>
            </Formik>
    );
}


const Formulario = () => {
    return (        
        <CntForm className="container section completo">
            <TitleForm>              
                <h2><span>¿</span>Tienes una idea que deseas convertir en realidad<span>?</span> Déjanos ayudarte.<i className="fa-solid fa-location-arrow"></i></h2>
                <p><span>¡</span>No esperes más, estamos ansiosos de escuchar de ti<span>!</span></p>
            </TitleForm>
            <Card>
                <Formi />
            </Card>
        </CntForm>
    );
}

export default Formulario;