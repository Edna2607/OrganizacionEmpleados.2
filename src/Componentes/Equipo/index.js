import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {
    //Destructuracion
    const{ colorPrimario, colorSecundario, titulo} = props.datos
    
    const colorFondo ={
        backgroundColor: colorSecundario
    }

    const estiloTitulo ={
        borderColor: colorPrimario
    }

    return <section className="equipo" style={colorFondo}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
           <Colaborador />
           <Colaborador />
           <Colaborador />
           <Colaborador />
        </div>
    </section> 
}

export default Equipo;