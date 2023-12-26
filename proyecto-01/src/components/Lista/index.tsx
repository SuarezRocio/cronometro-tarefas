import style from "./Lista.module.scss";
import Item from "./Item";
import { ITarefa } from "../../types/tarefas";

function Lista({ tarefas }: { tarefas: Array<ITarefa> }) {
  /**tarefas = [...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}]**/

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;


{  /**Este codigo antes era colado en el h2 >>
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