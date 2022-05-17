import React from "react"
import OtroComponente from './componentes/OtroComponente/OtroComponente';
import PersonaFuncional from './componentes/PersonaFuncional/PersonaFuncional';
import PersonaClase from './componentes/PersonaClase/PersonaClase';
import ComponenteFuncional from './componentes/ComponenteFuncional/ComponenteFuncional';
import Formulario from "./componentes/Formulario/Formulario";
import ComponenteApi from "./componentes/ComponenteAPI/ComponenteAPI";
import ComponentePersonas from "./componentes/ComponentesPersonas/ComponentesPersonas";

import {BrowserRouter, Route, Switch, Link} from "react-router-dom"

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      personas:[
        {
          nombre:"Jose",
          apellido:"Salazar",
          lugar:"Medellin"
        },
        {
          nombre:"Antonia",
          apellido:"Montero",
          lugar:"Santiago"
        },
        {
          nombre:"Katherine",
          apellido:"Suazo",
          lugar:"Concepcion"
        }
      ]
    }
  }
  
  render(){
    return (
      <div className="Container">
        <BrowserRouter>
          <h1>HOLA</h1>
          <Link to="/" className="btn btn-success">Home</Link>
          <Link to="/componente-funcional" className="btn btn-primary">Componente funcional</Link>
          <Link to="/persona-clase" className="btn btn-warning">Persona</Link>
          <Link to="/componente-API" className="btn btn-danger">Componente API</Link>
          <Switch>
            {/* <Route path="/formulario" render={()=><Formulario></Formulario>}></Route> */}
            <Route path="/formulario" render={()=><Formulario></Formulario>}></Route>
            {/* <Route path="/persona-clase" render={(routerProps)=><ComponentePersonas {...routerProps}></ComponentePersonas>}></Route> */}
            <Route path="/persona-clase/:palabra" render={(routerProps)=><ComponentePersonas {...routerProps}></ComponentePersonas>}></Route>
            <Route path="/persona-funcional" render={()=><PersonaFuncional nombre="Sara" apellido="Astudillo" lugar="Nogales"></PersonaFuncional>}></Route>
            <Route path="/componente-funcional" render={()=><ComponenteFuncional num={4} aumento={2}></ComponenteFuncional>}></Route>
            <Route path="/componente-API" render={()=><ComponenteApi></ComponenteApi>}></Route>
            <Route path="/" exact render={()=>{
              return (
                <OtroComponente>
                <ul>
                  <li>Esta es una lista del elemento hijo</li>
                </ul>
                <p>
                  este es otro elemento hijo
                </p>
              </OtroComponente>
              )
            }}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
        {/* <h1>Componente de clase</h1> */}
        {/* {
          this.state.personas.map( sujeto=> {
            return(
              <PersonaClase nombre={sujeto.nombre} apellido={sujeto.apellido} lugar={sujeto.lugar}></PersonaClase>
            )
          }
          )
        } */}
        {/* <PersonaClase nombre="Macarena" apellido="Tello" lugar="Calera"/>
        <PersonaClase nombre="Felipe" apellido="Tello" lugar="Quillota"/>
        <PersonaClase nombre="Raquel" apellido="Tello" lugar="Pensilvania"/> */}
        {/* <button className='btn btn-success' onClick={()=> alert("hiciste click")}>homero chino</button> */}



