import './App.css';
import Logo from "./componentes/Logo";
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState("");

  function agregarAlInput (valor) {
    setInput(input + valor);
  }

  function calcularResultado () {
    if (input === "") {
      alert("No se puede realizar la operación. Por favor, ingrese la expresión que desea calcular.");
    }
    else {
      setInput(Number(evaluate(input)).toFixed(2));
    }
  }

  function borrarTodo () {
    setInput("");
  }

  return (
    <div className="App">
      <Logo />
      <div className="contenedor-calculadora">
        <Pantalla
          mostrarEnPantalla={input}
        />
        <div className="fila">
          <Boton manejarClick={agregarAlInput}>7</Boton>
          <Boton manejarClick={agregarAlInput}>8</Boton>
          <Boton manejarClick={agregarAlInput}>9</Boton>
          <Boton manejarClick={agregarAlInput}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarAlInput}>4</Boton>
          <Boton manejarClick={agregarAlInput}>5</Boton>
          <Boton manejarClick={agregarAlInput}>6</Boton>
          <Boton manejarClick={agregarAlInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarAlInput}>1</Boton>
          <Boton manejarClick={agregarAlInput}>2</Boton>
          <Boton manejarClick={agregarAlInput}>3</Boton>
          <Boton manejarClick={agregarAlInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarAlInput}>.</Boton>
          <Boton manejarClick={agregarAlInput}>0</Boton>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarAlInput}>+</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClick={borrarTodo}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
