import "./Colaborador.css"
import { IoCloseCircleSharp } from "react-icons/io5"; 

const Colaborador = (props) => {

    const {nombre,puesto,foto,equipo} = props.datos
    const {colorPrimario, eliminarColaborador} = props

    return <div className="colaborador">
        <IoCloseCircleSharp className="eliminar" onClick={eliminarColaborador} />
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador;