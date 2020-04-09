import React,{useState} from 'react';
import Header from './components/Header';
import Resumen from './components/Resumen';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
//creando el styled component
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color:#ffffff;
  padding: 3rem;
`;
function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos:{
      marca: '',
      year: '',
      plan:''
    }
  });
  //extraer datos
  const {datos} = resumen;
  return (
    <Contenedor>
      <Header 
        titulo='Cotizador de Seguros'
      />
      <ContenedorFormulario>
          <Formulario 
            guardarResumen={guardarResumen}
          />
          <Resumen 
            datos={datos}
          />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
