import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {

    /*Estado = hooks => useState
    Se pueden tener toda la cantidad de estados dentro de un componente. (debe estar internamente dentro de la funcion, no por fuera)
    Estructura del useState()
    1-const [nombreVariable, funcionQueActualiza] = useState(valorInicial)
    2- const [nombre, actualizarNombre] = useState()*/

    //const [mostrar, actualizarMostrar] = useState(true)
    //const manejarClick = () => {
    //  console.log("mostrar/ocultar elemento", !mostrar)
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;