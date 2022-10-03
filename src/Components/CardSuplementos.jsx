import React from "react";

const CardSuplementos = () => {
    return (
    <div className="div-container-dificuldadedieta">

    <div className="dificuldadedieta-text">   
       <h1 className="dificuldadedieta-text-h1">Gostaria de utilizar</h1>
       <h1 className="dificuldadedieta-text-h1">suplementos esportivos?</h1>
    </div>

    <div className="div-dificuldadedieta-options">

    <div className="dificuldadedieta-input-item">        <input className="investimentodieta-input"  type="radio"></input>   <label className="suplemento-label">Sim</label>   </div> 
    <div className="dificuldadedieta-input-item">        <input className="investimentodieta-input" type="radio"></input>   <label className="suplemento-label">Não</label>   </div> 
                                
            
    </div>

</div>
)
}

export default CardSuplementos;