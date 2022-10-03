import React from "react";
import SetaDireita from '../Assets/seta-direita.png'

const CardRefeicoes = () => {
        return (
            <div className="div-container-refeicoes">

            <div className="objective-text">   
               <h1 className="objective-text-h1">Quantas refeições</h1>
               <h1 className="objective-text-h1">você faz ao dia?</h1>
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