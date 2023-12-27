import React from "react";
import style from "./Lista.module.scss";
import Item from "./Item";
import { ITarefa } from "../../types/tarefas";

interface Props {
  tarefas: ITarefa[];
  seleccionaTarefa: (tarefaSeleccionada: ITarefa) => void;
}

function Lista({ tarefas, seleccionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            seleccionaTarefa={seleccionaTarefa}
            key={item.id} // Corregido el acceso al id
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;



{ 
  /**  /**tarefas = [...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}]**/
 /** { tarefas: Array<ITarefa> })  */
  
  /**Este codigo antes era colado en el h2 >>
onClick={() => setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00" }])} */
    
    /**   const tarefas = [{
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
    }
] */}

{/**<li key={index} className="item">
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li> */}