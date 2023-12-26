import { ITarefa } from '../../../types/tarefas';
import style from '../Lista.module.scss';

export default function Item({ tarefa, tempo, seleccionado, completado, id }: ITarefa) {
  console.log("Item Actual:" , {tarefa,tempo,seleccionado,completado, id})
  
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
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
