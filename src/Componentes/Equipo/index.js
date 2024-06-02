import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo } = props.datos

    const { colaboradores, eliminarColaborador, actualizarColor } = props

    const colorFondo = { backgroundColor: hexToRgba(colorPrimario, 0.6)  }

    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={colorFondo}>
                <input 
                      type='color' //boton de tipo color 
                      className="input-color" //tiene la clase para darle la posicion
                      value={hexToRgba(colorPrimario, 0.6)} //el boton adquiere el color secundario
                      onChange={ (evento) => {
                         actualizarColor(evento.target.value, titulo);
                      }} //Funcion que ejerce una funcion cada vez que se le hace un cambio en el input.
                />

                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                        />)
                    }
                </div>
            </section>
        }</>
}

export default Equipo;