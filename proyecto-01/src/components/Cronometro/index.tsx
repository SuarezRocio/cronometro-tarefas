import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";
import { useEffect, useState } from "react";

interface Props {
  seleccionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

export default function Cronometro({ seleccionado,
    finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

    /** si estuviera seleccionado y seleccionado.tiempo
     * pasamos el tiempo para segundos
     * queremos pasar por el setTiempo si 
     * el seleccionado mudar
     * (tempoParaSegundos(String(seleccionado?.tempo)))
     * 
     * if(seleccionado?.tempo){
      setTempo
        }
     * */    
    
    /*setTempo(tempoParaSegundos(String(seleccionado.tempo))):
     Si la condición en el paso anterior es verdadera, entonces 
     se llama a setTempo con el resultado de la función tempoParaSegundos, 
     que convierte el valor de seleccionado.tempo a segundos. Parece que 
     tempoParaSegundos toma un valor y lo convierte a segundos. */



  useEffect(() => {
    if (seleccionado?.tempo) {
      setTempo(tempoParaSegundos(String(seleccionado.tempo)));
    }
  }, [seleccionado]);

  function regresiva(contador: number = tempo || 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        regresiva(contador - 1);
      }
      finalizarTarefa()
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regresiva()}>Começar!</Botao>
    </div>
  );
}


/*
console.log("conversao: " , tempoParaSegundos("01:01:01"))
*Tempo: {tempo}
*/