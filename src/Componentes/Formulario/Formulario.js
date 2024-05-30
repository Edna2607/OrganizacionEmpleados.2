import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/index";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {
     
    const [nombre, actualizaNombre] = useState("")
    const [puesto, actualizaPuesto] = useState("")
    const [foto, actualizaFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")


    //Evita que al darle click al boton se refresque la pantalla
const manejarEnvio = (evento) =>{
    evento.preventDefault()
    console.log("Manejar el envio")
    let datosAEnviar = {
        nombre:nombre,
        puesto:puesto,
        foto:foto,
        equipo:equipo
    }
    console.log(datosAEnviar)
}

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizaNombre} 
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizaPuesto} 
            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto} 
                actualizarValor={actualizaFoto} 
            />
            <ListaOpciones
                valor={equipo} 
                actualizarEquipo={actualizarEquipo} 
                equipos={props.equipos}
            />
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario;