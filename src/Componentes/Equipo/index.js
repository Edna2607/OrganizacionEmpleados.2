import "./Equipo.css"

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

        </div>
    </section> 
}

export default Equipo;