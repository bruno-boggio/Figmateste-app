import React from "react";

const CardSuplementos = () => {
    return (
    <div className="div-container-suplemento">

    <div className="suplemento-text">   
       <p>Gostaria de utilizar</p>
       <p>suplementos esportivos?</p>
    </div>

    <div className="div-suplemento-options">

    <div className="suplemento-input-item">        <input className="suplemento-input"  type="radio"></input>   <label className="suplemento-label">Sim</label>   </div> 
    <div className="suplemento-input-item">        <input className="suplemento-input" type="radio"></input>   <label className="suplemento-label">Não</label>   </div> 
                                
            
    </div>

</div>
)
}

export default CardSuplementos;