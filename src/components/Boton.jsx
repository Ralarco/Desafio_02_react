import React from "react"

const Boton = ( props ) => {
    return (
        <React.Fragment>
            <button type="submit" className="btn btn-dark" hidden={ props.btnVis } >Ingresar</button>
        </React.Fragment>
    )

}
export default Boton;