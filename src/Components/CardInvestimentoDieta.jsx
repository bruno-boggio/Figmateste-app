import React from "react";

const CardInvestimentoDieta = () => {
    return (
    <div className="div-container-dificuldadedieta">

    <div className="dificuldadedieta-text">   
       <p>Investimento</p>
       <p>na dieta:</p>
    </div>

    <div className="div-dificuldadedieta-options">

    <div className="dificuldadedieta-input-item">        <input className="dificuldadedieta-input"  type="radio"></input>   <label className="dificuldadedieta-label">Econômica</label>   </div> 
    <div className="dificuldadedieta-input-item">        <input className="dificuldadedieta-input" type="radio"></input>   <label className="dificuldadedieta-label">Moderadamente econômica</label>   </div> 
    <div className="dificuldadedieta-input-item">        <input className="dificuldadedieta-input" type="radio"></input>   <label className="dificuldadedieta-label">O que for melhor pra mim</label>   </div> 
                                
            
    </div>

</div>
)
}

export default CardInvestimentoDieta;