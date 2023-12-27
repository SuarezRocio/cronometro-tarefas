import { ITarefa } from '../../../types/tarefas';
import style from './Item.module.scss';


interface Props extends ITarefa{
  seleccionaTarefa : (tarefaSeleccionada: ITarefa) => void
}


export default function Item({ tarefa, tempo, seleccionado, completado, id , seleccionaTarefa }: Props) {
/*console.log("Item Actual:" , {tarefa,tempo,seleccionado,completado, id})*/
  
  return (
    <li 
     className={`${style.item} ${seleccionado ? style.itemSeleccionado : ""}
     ${completado ? style.itemCompletado : ""}
     `}
     onClick={() => !completado && seleccionaTarefa({
      tarefa,
      tempo,
      seleccionado,
      completado,
      id
    })}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && 
      <span className={style.concluido}
      arial-label="tarefa-completada"
      ></span>
      }
    </li>
  )
}

/*import React from "react";
import style from "../Lista.module.scss";

interface ItemProps {
  tarefa: string;
  tempo: string;
}

const Item: React.FC<ItemProps> = (props) => {
  const { tarefa, tempo } = props;

  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
};

export default Item;*/
