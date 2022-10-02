import React from "react";

    const CardDficuldadeDieta = () => {
        return (
            <div className="div-container-dificuldadedieta">

            <div className="dificuldadedieta-text">   
               <p>Nível de dificuldade</p>
               <p>da dieta:</p>
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