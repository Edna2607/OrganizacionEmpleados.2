import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
    
    const placeholderModificado = `${props.placeholder}...`

    //Funcion para el evento onChange
    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value) //de esta manera se puede actualizar los valores ingresados en el campo texto
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}//cada vez que el usuario inserte un valor en el input se va mandar esa funcion onChange
        /> 
    </div>
}

export default CampoTexto;