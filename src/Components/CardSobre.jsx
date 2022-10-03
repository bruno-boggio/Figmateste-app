import React from "react";
import SetaDireita from '../Assets/seta-direita.png'

const CardSobre = () => {
    return (
          <div className="div-about">

                <div className="about-text">
                   <h1 className="about-text-h1">Olá!</h1>     
                   <h1 className="about-text-h1">Precisamos conhecer</h1>
                   <h1 className="about-text-h1">um pouco sobre você:</h1>
                </div>
            
                <div className="about-fields"> 

                    <div className="gender">
                        <div>
                        <input type="radio" />
                        <label>Homem</label>
                        </div>
                    

                        <div>
                        <input type="radio" />
                        <label>Mulher</label>
                        </div> 
                    </div>   

                  <div className="name">
                        <div>
                            <label>Nome</label>
                        </div> 

                        <div>
                            <label>Sobrenome</label>
                        </div> 
                  </div>    

                  <div className="input-name">
                       <input className="input-fname" placeholder="Priscila" type="text" />
                       <input className="input-lname" placeholder="Meireles" type="text" /> 
                  </div>  

                   <div className="div-nasc">
                        <label><strong>Data de Nascimento</strong></label>
                        <div className="data-nasc">
                        <input className="input-nasc" placeholder="00/00/0000" type="text"></input>
                        </div>
                    </div> 

                    <div>
                        <div className="label-weight-height">
                            <label>Peso</label>
                            <label>Altura</label>
                        </div>
                    </div>

                    <div className="input-weight-height">
                        <div>
                        <input className="weight" placeholder="55Kg" type="text" />
                        </div> 

                        <div>
                        <input className="height" placeholder="1,67m" type="text" />
                        </div> 
                  </div>    

                  <div className="div-imc">
                        <label><strong>Nível de gordura corporal</strong></label>
                        <div className="imc">
                        <input className="input-nasc" placeholder="Moderado (22 a 35%)" type="text"></input>
                        </div>
                    </div> 


                </div>
          </div>   
    )
}

export default CardSobre;