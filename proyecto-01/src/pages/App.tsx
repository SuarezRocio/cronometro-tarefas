//import Botao from "./components/Botao"
import { useState } from "react";
import  Cronometro from "../components/Cronometro"
import Formulario from "../components/Formulario"
import Lista from "../components/Lista"
import style from"./App.module.scss"
import { ITarefa } from "../types/tarefas";
 
function App() {
  //nuestro array de tarefas
 const [tarefas , setTarefas] = useState([]);
 const [seleccionado, setSeleccionado] = useState<ITarefa>()

//funcion de seleccion de tarefa
function seleccionaTarefa(tarefaSeleccionada: ITarefa) {
  setSeleccionado(tarefaSeleccionada);
  setTarefas((tarefasAnteriores) =>
    tarefasAnteriores.map((tarefa) => ({
      ...tarefa,
      seleccionado: tarefa.id === tarefaSeleccionada.id ? true : false,
    }))
  );
}

function finalizarTarefa() {
if(seleccionado){
  setSeleccionado(undefined);
  setTarefas(tarefasAnteriores => 
    tarefasAnteriores.map(tarefa => {
      if(tarefa.id === seleccionado.id){
        return {
          ...tarefa,
          seleccionado: false,
          completado: true
        }
      }
      return tarefa;
    })
    )
}
}


 return (
    <>
      <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}
      seleccionaTarefa={seleccionaTarefa}
      />
      <Cronometro 
      finalizarTarefa={finalizarTarefa}
      seleccionado={seleccionado}/>
      </div>
    </>
  )
}
/**finalizarTarefa se va a ejecutar
 * cuando llegar a 0 el cronometro
 */

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