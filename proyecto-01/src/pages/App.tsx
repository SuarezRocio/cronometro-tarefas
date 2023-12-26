//import Botao from "./components/Botao"
import { useState } from "react";
import  Cronometro from "../components/Cronometro"
import Formulario from "../components/Formulario"
import Lista from "../components/Lista"
import style from"./App.module.scss"
 
function App() {
  //nuestro array de tarefas
 const [tarefas , setTarefas] = useState([]);
  return (
    <>
      <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
      </div>
    </>
  )
}

export default App

/**{
  tarefa: "React",
  tempo: "02:00:00"
}, {
  tarefa: 
  "Javascript",
  tempo: 
  "01:00:00"
},{
  tarefa: 
  "Typescript",
  tempo: 
  "03:00:00"
} */