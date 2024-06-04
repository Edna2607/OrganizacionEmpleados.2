import "./Colaborador.css"
import { IoCloseCircleSharp } from "react-icons/io5";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; 


const Colaborador = (props) => {

    const {nombre,puesto,foto,equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props


    // Operador Ternario = si la condicion es true entonces es verdadera en caso que no lo sea entonces es False.
    //Condicion ? verdadero : falso

    return <div className="colaborador">
        <IoCloseCircleSharp className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            
            { fav ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}
            
        </div>
    </div>
}

export default Colaborador;