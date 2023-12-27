import React from "react";
import style from "./Relogio.module.scss";

interface Props {
  tempo: number | undefined;
}

/**si el tempo fuese undefined o nulo
 * pasamos un valor patron para el
 * si fuese el valor patron lo igualo a 0
 **/

export default function Relogio({ tempo = 0 }: Props) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  //minutosString
  //pasando los corchetes consigo pegar los indices
  //el metodo .padStart pasa la cantidad de caracteres que queremos definir como patron
  //en este caso serian minimo 2 caracteres y inician con string 0
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0");
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  );
}
