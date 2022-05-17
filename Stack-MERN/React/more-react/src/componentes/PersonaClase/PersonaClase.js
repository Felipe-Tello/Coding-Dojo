import React from "react"

class PersonaClase extends React.Component{

    constructor(props){
        super(props);
        this.state={
            estadocivil:"soltero"
        }
    }
    
    hizoClick =() =>{
        alert("hola hiciste click en persona");
    }
    hizoClick2 =(e, nombre) =>{
        alert("hizo click en "+ nombre);
    }
    cambiarEstadoCivil=()=>{
        if (this.state.estadocivil === "soltero") {
            this.setState({estadocivil:"casado"});
        } else {
            this.setState({estadocivil:"soltero"});
        }
    }
    
    render(){
        const {nombre, apellido, lugar} = this.props

        return (
            // <div className="card">
            //     <h2>{this.props.nombre} {this.props.apellido}</h2>
            //     <p>{this.props.lugar}</p>
            // </div>
            <div className="card">
                <h2>{nombre} {apellido}</h2>
                <p>{lugar}</p>
                <p>Estado civil: {this.state.estadocivil}</p>
                <button className="btn btn-success" onClick={this.cambiarEstadoCivil}>on click con "state"</button>
                <button className="btn btn-warning" onClick={this.hizoClick}>on click simple</button>
                <button className="btn btn-info" onClick={(e)=>this.hizoClick2(e, nombre)}>on click mas parametro</button>
            </div>
        )
    }
}

export default PersonaClase;