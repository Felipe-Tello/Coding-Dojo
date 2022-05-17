import React, {useState} from "react";

const Formulario=()=>{

    const [nombre, setNombre]= useState("");
    const [apellido, setApellido]= useState("");
    const [email, setEmail]= useState("");
    const [hizoSubmit, setHizoSubmit]= useState(false);

    const crearUsuario =(e) =>{
        e.preventDefault();
        console.log("Nombre:"+nombre+" Apellido:"+apellido+" E-mail:"+email);
        setNombre("");
        setApellido("");
        setEmail("");
        setHizoSubmit(true);
    }

    const mensaje = () =>{
        if (hizoSubmit) {
            return "Gracias por sus datos";
        } else {
            return "favor llenar datos";
        }
    }

    return(
        <form onSubmit={crearUsuario}>
            <h2>Crear Usuario</h2>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" className="form-control" value={nombre} onChange={ (e)=>setNombre(e.target.value)}/>
            </div>
            <div>
                <label>apellido</label>
                <input className="form-control" value={apellido} onChange={ (e)=>setApellido(e.target.value)}/>
            </div>
            <div>
                <label>E-mail</label>
                <input className="form-control" value={email} onChange={ (e)=>setEmail(e.target.value)}/>
            </div>
            <input type="submit" className="btn btn-success" value="Crear Usuario"/>
            {mensaje()}
        </form>
    )
}

export default Formulario