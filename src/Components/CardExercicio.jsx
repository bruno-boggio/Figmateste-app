import React from "react";

const CardExercicio = () => {
    return (
    <div className="div-container-exercicio">

    <div className="exercicio-text">   
       <p>Gostaria de utilizar</p>
       <p>suplementos esportivos?</p>
    </div>

    <div className="div-exercicio-options">

        <div className="exercicio-input-item">        <input className="suplemento-input"  type="radio"></input>   <label className="suplemento-label">Sim</label>   </div> 
        <div className="exercicio-input-item">        <input className="suplemento-input" type="radio"></input>   <label className="suplemento-label">Não</label>   </div> 
                                    
        <div className="exercicio-input-item">         <span className="exercicio-p">BMX, mountain-bike 8,5</span>   </div>                             
        <div className="exercicio-input-item">          <span className="exercicio-p">Horário:do:treino</span>   </div>          
    
    </div>

</div>
)
}

export default CardExercicio;