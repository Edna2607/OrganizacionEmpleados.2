import { useState } from 'react';
import {v4 as uuid} from  "uuid";
import './App.css';
import Header from "./Componentes/Header/Header";
import Formulario from './Componentes/Formulario/Formulario';
import MiOrg from './Componentes/MiOrg';
import Equipo from './Componentes/Equipo';
import Footer from './Componentes/Footer';





function App() {
  //ubicacion del Estado = debe estar dentro de la funcion y antes del return.
  const [mostrarFormulario, actualizarMostrar] = useState(false)

  //Colaboradores : que los datos que se ingresan en el formulario, se guarden en un arreglo vacio.
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id:uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {
      id:uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de Software e Instructora"
    },
    {
      id:uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanMarieAluraLatam.png",
      nombre: "Jean Marie Quijada",
      puesto: "Instructora en Alura Latam"
    },
    {
      id:uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor"
    },
    {
      id:uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack"
    },
  ])

  const [equipos, actualizarEquipos] = useState([
    //-------Lista de Equipos ---------
    {
      id:uuid(),
      titulo: "Programación",
      colorPrimario: '#57C278',
      colorSecundario: "#D9F7E9"
    },
    {
      id:uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id:uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id:uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id:uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id:uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id:uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ])

  


  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }


  //------- Registrar Colaborador------

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador)
    //Esta funcion va a recibir el nuevo colaborador y lo va actualizar
    //Spread Operator = crear una copia de los valores actuales y después se va agregar el colaborador.
    actualizarColaboradores([...colaboradores, colaborador])
  }


  //-------ELiminar Colaborador---------

  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) =>  colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //------ Actualizar Color de Equipo ------
  const actualizarColor = (color, id) => {
    console.log("Actualizar :", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //-------Crear Equipo--------
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid ()} ]) //hace una copia : ... del valor que tenga actualmente equipos y despues le va agregar un nuevo objeto.
  }

  return (
    <div >
      <Header />

      { /*mostrarFormulario === true ? <Formulario /> : <div></div>*/}
      {mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => {
          return <Equipo
            datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
          />
        })
      }

      <Footer />

    </div>
  );
}


export default App;
