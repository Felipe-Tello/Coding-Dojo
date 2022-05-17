import React, {useState} from "react";

const ComponenteFuncional =({num,aumento}) =>{
//const ComponenteFuncional =(props) =>{

    // props = {
    //     num:4
    //     aumento:2
    // }

    const [numero, setNumero]= useState(num);
  //const [variable que enviamos (no deberia llamarse igual que el de arriba porque tira error), funcion que modifica]= useState(valor en que parte);
    const AumentaNumero =() =>{
        setNumero(numero + aumento);
    }

    return(
        <div>
            <h1>{numero}</h1>
            <button className="btn btn-primary" onClick={AumentaNumero}>Aumenta 1</button>
        </div>
    )
}
export default ComponenteFuncional;