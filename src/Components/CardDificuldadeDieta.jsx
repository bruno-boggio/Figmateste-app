import React from "react";

    const CardDficuldadeDieta = () => {
        return (
            <div className="div-container-dificuldadedieta">

            <div className="dificuldadedieta-text">   
               <h1 className="dificuldadedieta-text-h1">Nível de dificuldade</h1>
               <h1 className="dificuldadedieta-text-h1">da dieta:</h1>
            </div>

            <div className="div-dificuldadedieta-options">

            <div className="dificuldadedieta-input-item">        <input className="dificuldadedieta-input"  type="radio"></input>   <label className="dificuldadedieta-label">Sem nenhum preparo</label>   </div> 
            <div className="dificuldadedieta-input-item">        <input className="dificuldadedieta-input" type="radio"></input>   <label className="dificuldadedieta-label">Com preparos rápidos</label>   </div> 
            <div className="dificuldadedieta-input-item">        <input className="dificuldadedieta-input" type="radio"></input>   <label className="dificuldadedieta-label">Gosto de cozinhar</label>   </div> 
                                        
                    
            </div>

        </div>
        )
    }

export default CardDficuldadeDieta;    