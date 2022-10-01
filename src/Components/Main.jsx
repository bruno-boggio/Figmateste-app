import React from "react";

const MainContent = () => {
    return (
          <div className="div-about">

                <div className="about-text">
                   <p>Olá!</p>     
                   <p>Precisamos conhecer</p>
                   <p>um pouco sobre você:</p>
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

                    
                </div>
          </div>   
    )
}

export default MainContent;