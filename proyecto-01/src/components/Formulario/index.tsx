import React from "react";
import style from "./Formulario.module.scss"
import Botao from "../Botao";
import { ITarefa } from "../../types/tarefas";
 
class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }>{
state = {
    tarefa: "",
    tempo: "00:00"
}
adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault()
    /**con el spread estamos pasando a ese objeto que tenemos nuestro tiempo y nuestra tarefa nueva 
     * llamando a this.state
     *   console.log("state: ", this.state);}
     */
    this.props.setTarefas( tarefasAntigas =>[...tarefasAntigas, {...this.state}]);
    /**llamamos nuestro setState despues que adicionamos tarefa */
    this.setState({
        tarefa: "",
        tempo: "00:00"
    })
}

    render(){
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione un novo estudo</label>
                    <input 
                    type="text"
                    name="tarefa"
                    value={this.state.tarefa}
                    onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                    id="tarefa"
                    placeholder="O que voce quer estudar"
                    required
                    />
                </div><div className={style.inputContainer}>
                <label htmlFor="tempo"></label>
                    <input 
                        type="time"
                        step="1"
                        name="tempo"
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        id="tempo"
                        min="00:00:00"
                        max="23:59:00"
                    />
                </div>
                <Botao type="submit">Adicionar</Botao>
            </form>
        )
    }
}
export default Formulario