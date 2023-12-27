import React from "react";
import style from "./Botao.module.scss"
 

class Botao extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}>{
      /*const estaAtivo = false;
        const backgroundColor = estaAtivo ? "green" : "red"
        const styles = {
            backgroundColor
        }*/
        render() { 
          /*  const { type = "button" } = this.props;*/
         /**{ type?: "button" | "submit" | "reset" | undefined }  */   
        const {type = "button", onClick} = this.props;
         return (
            <button onClick={onClick}  type={type}  className={style.botao}>

                {this.props.children}
            </button>
            )        
    }
}
export default Botao;