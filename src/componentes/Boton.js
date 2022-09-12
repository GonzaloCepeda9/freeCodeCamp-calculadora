import React from "react";
import "../estilos/Boton.css";

function Boton (props) {

  function esOperador (valor) {
    return isNaN(valor) && (valor !== ".") && (valor !== "=");
  }

  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? "boton-operador" : "boton-numero"}`.trimEnd()} onClick={ () => props.manejarClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;