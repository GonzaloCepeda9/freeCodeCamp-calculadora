import React from "react";
import "../estilos/Logo.css";
import freeCodeCampLogo from "../imagenes/freecodecamp-logo.png";

function Logo () {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img className="freecodecamp-logo" src={freeCodeCampLogo} alt="Logo de freeCodeCamp"/>
    </div>
  );
}

export default Logo;