import React from 'react';
import styled from '@emotion/styled';
import { Transition,CSSTransition, TransitionGroup} from 'react-transition-group';
const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    padding-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align:center;
    padding: .5rem;
    border: 1px solid #26c6da;
    margin-top: 1rem;
    position: relative;
`;
const TextoCotizacion = styled.p`
   color: #00838f;
   padding: 1rem;
   text-transform: uppercase;
   font-weight: bold;
   margin: 0;
`;
const Resultado = ({cotizacion}) => {
   return (
       (cotizacion === 0) ? <Mensaje>Elije tus datos</Mensaje>
       :
       ( 
        <ResultadoCotizacion>
            <TransitionGroup
                component="p"
                className="resultado"
            >
                <CSSTransition
                    classNames="resultado"
                    key={cotizacion}
                    timeout={{enter:500,exit:500}}
                >
                    <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion>
                </CSSTransition>
            </TransitionGroup>
        </ResultadoCotizacion>
       )
   )
}
 
export default Resultado;