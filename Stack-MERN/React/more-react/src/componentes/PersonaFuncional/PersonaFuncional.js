import React, {useState} from "react"

const PersonaFuncional =({nombre, apellido, lugar}) => {

    // const [state, setState] = useState ({
    //     estadocivil: "soltero"
    // })

    const [estadocivil, setEstadoCivil] = useState("soltero");

    const [numeros, setNumeros] =useState([1,2,3,4,5]);

    const CambiarEstadoCivil =() =>{
        // if (state.estadocivil==="soltero") {
        //     setState({estadocivil:"casado"});
        // } else {
        //     setState({estadocivil:"soltero"});
        // }
        if (estadocivil==="soltero") {
            setEstadoCivil("casado");
        } else {
            setEstadoCivil("soltero");
        }
    }

    return(
    <div className="card">
        <h4>Componente Funcional</h4>
        <h2>{nombre} {apellido}</h2>
        <p>{lugar}</p>
        {/* <p>Estado civil: {state.estadocivil}</p> */}
        <p>Estado civil: {estadocivil}{estadocivil === "soltero" ? " ;)" : " :0"}</p> 
        {/* es como un if-else= condicional ? si se cumple : si no se cumple */}
        <br></br>
        <p>Estado civil: {estadocivil}{estadocivil === "soltero" && " wow"}</p> 
        {/* es como un if= condicional && si se cumple */}
        {
            numeros.map(valor => <li>{valor}</li>)
        }
        <button className="btn btn-success" onClick={CambiarEstadoCivil}>on click con "state"</button>
    </div>
    )
}

export default PersonaFuncional;