import React from "react";
import style from "./Botao.module.scss"
 

class Botao extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined
}>{
      /*const estaAtivo = false;
        const backgroundColor = estaAtivo ? "green" : "red"
        const styles = {
            backgroundColor
        }*/
        render() { 
          /*  const { type = "button" } = this.props;*/
         /**{ type?: "button" | "submit" | "reset" | undefined }  */   
        const {type = "button"} = this.props;
         return (
            <button  type={type}  className={style.botao}>

                {this.props.children}
            </button>
            )        
    }
}
export default Botao;