import React,{useEffect, useState}  from "react";
import axios from "axios";

const ComponenteApi = () =>{

    const [imagen, setImagen] = useState("");
    const [clicks, setClicks] = useState(0);

    const hizoClick= ()=>{
        setClicks(clicks+1);
    }

    useEffect(()=>{
            axios.get("https://dog.ceo/api/breeds/image/random")
            .then(response=>{
                setImagen(response.data.message);
            })
    },[clicks])

    return (
        <div>
            <img src={imagen} className="img-fluid"></img>
            haz recargado al perrito {clicks} veces
            <button className="btn btn-primary" onClick={hizoClick}>DALE!!!</button>
        </div>
    )
}

export default ComponenteApi;