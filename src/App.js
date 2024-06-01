import { useState } from 'react';
import './App.css';
import Header from "./Componentes/Header/Header";
import Formulario from './Componentes/Formulario/Formulario';
import MiOrg from './Componentes/MiOrg';
import Equipo from './Componentes/Equipo';
import Footer from './Componentes/Footer';




function App() {
  //ubicacion del Estado = debe estar dentro de la funcion y antes del return.
  const [mostrarFormulario, actualizarMostrar] = useState(true) 

  //Colaboradores : que los datos que se ingresan en el formulario, se guarden en un arreglo vacio.
  const[colaboradores, actualizarColaboradores] = useState([{
    equipo:"Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  }])

  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador

  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo Colaborador", colaborador)
    //Esta funcion va a recibir el nuevo colaborador y lo va actualizar
    //Spread Operator = crear una copia de los valores actuales y después se va agregar el colaborador.
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Lista de Equipos
  const equipos = [

    {
      titulo: "Programación",
      colorPrimario: '#57C278',
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
]

  return (
    <div >
      <Header />
      
      { /*mostrarFormulario === true ? <Formulario /> : <div></div>*/}
      {mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      }
          
      <MiOrg cambiarMostrar={cambiarMostrar}/>
       
      {
        equipos.map( (equipo) => {
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          />
        })
      }

      <Footer/>

    </div>
  );
}


export default App;
