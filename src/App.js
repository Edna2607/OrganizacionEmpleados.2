import { useState } from 'react';
import './App.css';
import Header from "./Componentes/Header/Header";
import Formulario from './Componentes/Formulario/Formulario';
import MiOrg from './Componentes/MiOrg';
import Equipo from './Componentes/Equipo';




function App() {
  //ubicacion del Estado = debe estar dentro de la funcion y antes del return.
  const [mostrarFormulario, actualizarMostrar] = useState(true) 

  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div >
      <Header />
      
      { /*mostrarFormulario === true ? <Formulario /> : <div></div>*/}
      {mostrarFormulario && <Formulario />}
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      <Equipo equipo="Programación"/>
      <Equipo equipo="Front End"/>
      <Equipo equipo="Data Science"/>
      <Equipo equipo="Devops"/>
      <Equipo equipo="UX y Diseño"/>
    </div>
  );
}


export default App;
