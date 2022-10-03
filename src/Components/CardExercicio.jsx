import React from "react";

const CardExercicio = () => {
    return (
    <div className="div-container-dificuldadedieta">

    <div className="dificuldadedieta-text">   
       <h1 className="dificuldadedieta-text-h1">Você pratica</h1>
       <h1 className="dificuldadedieta-text-h1">exercícios físicos?</h1>
    </div>

    <div className="div-dificuldadedieta-options">

        <div className="dificuldadedieta-input-item">        <input className="suplemento-input"  type="radio"></input>   <label className="suplemento-label">Sim</label>   </div> 
        <div className="dificuldadedieta-input-item">        <input className="suplemento-input" type="radio"></input>   <label className="suplemento-label">Não</label>   </div> 
                                    
        <div className="dificuldadedieta-input-item">         <span className="exercicio-p">BMX, mountain-bike 8,5</span>   </div>                             
        <div className="dificuldadedieta-input-item">          <span className="exercicio-p">Horário:do:treino</span>   </div>          
    
    </div>

</div>
)
}

export default CardExercicio;