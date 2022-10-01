import React from "react";
import SetaDireita from '../Assets/seta-direita.png'

const CardRefeicoes = () => {
        return (
            <div className="div-container-refeicoes">

            <div className="objective-text">   
               <p>Quantas refeições</p>
               <p>você faz ao dia?</p>
            </div>

            <div className="div-refeicoes-options">

            <button className="btn-refeicoes"> 03 Refeições
            <img className="btn-refeicoes-img" src={SetaDireita} alt="seta"/>
            </button>
                                        
                    
            </div>

        </div>
            )
}

export default CardRefeicoes