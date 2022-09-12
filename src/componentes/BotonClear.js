import React from "react";
import "../estilos/BotonClear.css";

function BotonClear (props) {
  return (
    <div className="boton-clear" onClick={ () => props.manejarClick()}>
      {props.children}
    </div>
  )
}

export default BotonClear;