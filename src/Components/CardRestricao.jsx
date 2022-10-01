import React from "react";

const CardRestricao = () => {
    return (
        <div className="div-container-restricao">

            <div className="restricao-text">   
               <p>Você tem alguma</p>
               <p>restrição alimentar?</p>
            </div>


            <div className="restricao-container-items">



                <div className="diet-div-items">
                    <div className="diet-input-item">    <input className="" type="radio"></input>  <label>Glúten</label>  </div> 
                    <div className="diet-input-item">    <input className="" type="radio"></input>  <label>Amendoim</label>    </div> 
                    <div className="diet-input-item">    <input className="" type="radio"></input>  <label>Ovos</label> </div> 
                </div>    


                <div className="diet-div-items">
                    <div className="diet-input-item">     <input type="radio"></input>  <label>Peixe</label>    </div> 
                    <div className="diet-input-item">     <input type="radio"></input>  <label>Leite</label>  </div> 
                    <div className="diet-input-item">     <input type="radio"></input>  <label>Soja</label>    </div> 
                </div>   

 

                <div className="diet-div-items">
                    <div className="diet-input-item">        <input type="radio"></input>   <label>Mariscos</label>   </div> 
                    <div className="diet-input-item">        <input type="radio"></input>   <label>Porco</label> </div> 
                    <div className="diet-input-item">        <input type="radio"></input>   <label>Bacon</label>  </div> 
                </div>   

                <div className="diet-div-items">
                    <div className="diet-input-item">        <input type="radio"></input>   <label>Tomate</label>   </div> 
                    <div className="diet-input-item">        <input type="radio"></input>   <label>Legumes</label> </div> 
                    <div className="diet-input-item">        <input type="radio"></input>   <label>Laticíneos</label>  </div> 
               
                </div>   

               <div>
                <p className="restricao-text-p">Adicione suas próprias restrições</p>
                </div> 

                <div className="restricao-div-input">
                    <input className="restricao-input" placeholder="Digite aqui.." type="text"></input>
                    <button className="restricao-btn">Enviar</button>
                </div>    

            </div>


        </div>
    )
}

export default CardRestricao;