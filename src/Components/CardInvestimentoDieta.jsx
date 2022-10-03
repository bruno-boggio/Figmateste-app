import React from "react";

const CardInvestimentoDieta = () => {
    return (
    <div className="div-container-dificuldadedieta">

    <div className="dificuldadedieta-text">   
       <h1 className="dificuldadedieta-text-h1">Investimento</h1>
       <h1 className="dificuldadedieta-text-h1">na dieta:</h1>
    </div>

    <div className="div-dificuldadedieta-options">

    <div className="dificuldadedieta-input-item">        <input className="investimentodieta-input"  type="radio"></input>   <label className="dificuldadedieta-label">Econômica</label>   </div> 
    <div className="dificuldadedieta-input-item">        <input className="investimentodieta-input" type="radio"></input>   <label className="dificuldadedieta-label">Moderadamente econômica</label>   </div> 
    <div className="dificuldadedieta-input-item">        <input className="investimentodieta-input" type="radio"></input>   <label className="dificuldadedieta-label">O que for melhor pra mim</label>   </div> 
                                
            
    </div>

</div>
)
}

export default CardInvestimentoDieta;