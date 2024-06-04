import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
    
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion: la ventaja que tenemos con esta destructuracion es que en caso de que type sea indefinido, le podemos dar un valor por defecto.
    const { type = "text" } = props

    //Funcion para el evento onChange
    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value) //de esta manera se puede actualizar los valores ingresados en el campo texto
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}//cada vez que el usuario inserte un valor en el input se va mandar esa funcion onChange
        type = {type} //aqui le da el input color
        /> 
    </div>
}

export default Campo;