import React from "react";
import "../estilos/Pantalla.css"

function Pantalla ({ mostrarEnPantalla }) {
  return (
    <div className="pantalla">
      {mostrarEnPantalla}
    </div>
  )
}

export default Pantalla;