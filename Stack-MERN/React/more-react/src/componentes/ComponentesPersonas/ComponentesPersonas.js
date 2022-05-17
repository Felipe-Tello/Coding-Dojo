import React, {useState, useEffect} from 'react';
import Persona from '../PersonaClase/PersonaClase';

import { useParams } from 'react-router-dom';

const ComponentePersonas = (props) => {

    const [personas, setPersonas] = useState([
        {
            nombre: "Elena",
            apellido: "De Troya",
            lugar: "Roma"
          },
          {
            nombre: "Juana",
            apellido: "De Arco",
            lugar: "Paris"
          },
          {
            nombre: "Pedro",
            apellido: "Páramo",
            lugar: "Comala"
          }
    ])

    useEffect(()=>{
        console.log(props);
    },[])

    const {palabra} = useParams();

    return(
        
        <div>
            {
                personas.map((persona, ind) => {
                    return <Persona nombre={persona.nombre} apellido={persona.apellido} lugar={persona.lugar} />
                })
            }
            <p>La palabra de tu url es: {props.match.params.palabra}</p>
            <p>La palabra de tu url es (useParams): {palabra}</p>
        </div>
    )

}

export default ComponentePersonas;