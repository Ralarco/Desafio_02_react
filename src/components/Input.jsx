import React from "react";
import Boton from "./Boton";

const Input = ( props ) => {
    return (
        <form className="loginContainer mt-5" onSubmit={ props.error }>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Nombre</label>
              <input onChange={ props.name } type="text" className="form-control" placeholder="Ingresa tu nombre"/>
              <div class="alert alert-danger" role="alert" hidden={ props.alertaNombre }>
  Debes ingresar un nombre
</div>

            </div>
            <div className="mb-3">
              <label for="inputPassword" className="col-sm-2 col-form-label">Contraseña</label>
              <input  onChange={ props.pass }  type="password" className="form-control" placeholder="Ingresa tu contraseña"/>
            </div>
            <div className="mb-3">
              <Boton 
                btnVis = { props.oculto }
              />
            </div>
        </form>
    )
}

export default Input;