import React from 'react';
import styled from '@emotion/styled';
import { primeraMayuscula} from '../helper';
import PropTypes from 'prop-types';

//creando syledcomponent
const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {
    const {marca,year,plan} = datos;
    if(marca === '' || year === '' || plan === ''){
        return null;
    }
    return ( 
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                <li>Año del Auto: {year}</li>
            </ul>
        </ContenedorResumen>
     );
}
 Resumen.propTypes = {
     datos: PropTypes.object.isRequired
 }
export default Resumen;