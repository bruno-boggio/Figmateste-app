import React from "react";

const CardInvestimentoDieta = () => {
    return (
    <div className="div-container-investimentodieta">

    <div className="investimentodieta-text">   
       <p>Investimento</p>
       <p>na dieta:</p>
    </div>

    <div className="div-investimentodieta-options">

    <div className="investimentodieta-input-item">        <input className="investimentodieta-input"  type="radio"></input>   <label className="investimentodieta-label">Econômica</label>   </div> 
    <div className="investimentodieta-input-item">        <input className="investimentodieta-input" type="radio"></input>   <label className="investimentodieta-label">Moderadamente econômica</label>   </div> 
    <div className="investimentodieta-input-item">        <input className="investimentodieta-input" type="radio"></input>   <label className="dificuldadedieta-label">O que for melhor pra mim</label>   </div> 
                                
            
    </div>

</div>
)
}

export default CardInvestimentoDieta;