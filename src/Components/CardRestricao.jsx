import React from "react";

const CardRestricao = () => {
    return (
        <div className="div-container-restricao">

            <div className="restricao-text">   
               <h1 className="restricao-text-h1">Você tem alguma</h1>
               <h1 className="restricao-text-h1">restrição alimentar?</h1>
            </div>


            <div className="restricao-container-items">



                <div className="restricao-div-items">
                    <div className="restricao-input-item">    <input className="input-item-restricao" type="radio"></input>  <label className="label-diet-item">Glúten</label>  </div> 
                    <div className="restricao-input-item">    <input className="input-item-restricao" type="radio"></input>  <label className="label-diet-item">Amendoim</label>    </div> 
                    <div className="restricao-input-item">    <input className="input-item-restricao" type="radio"></input>  <label className="label-diet-item">Ovos</label> </div> 
                </div>    


                <div className="restricao-div-items">
                    <div className="restricao-input-item">     <input className="input-item-restricao" type="radio"></input>  <label className="label-diet-item">Peixe</label>    </div> 
                    <div className="restricao-input-item">     <input className="input-item-restricao" type="radio"></input>  <label className="label-diet-item">Leite</label>  </div> 
                    <div className="restricao-input-item">     <input className="input-item-restricao" type="radio"></input>  <label className="label-diet-item">Soja</label>    </div> 
                </div>   

 

                <div className="restricao-div-items">
                    <div className="restricao-input-item">        <input className="input-item-restricao" type="radio"></input>   <label className="label-diet-item">Mariscos</label>   </div> 
                    <div className="restricao-input-item">        <input className="input-item-restricao" type="radio"></input>   <label className="label-diet-item">Porco</label> </div> 
                    <div className="restricao-input-item">        <input className="input-item-restricao" type="radio"></input>   <label className="label-diet-item">Bacon</label>  </div> 
                </div>   

                <div className="restricao-div-items">
                    <div className="restricao-input-item">        <input className="input-item-restricao" type="radio"></input>   <label className="label-diet-item">Tomate</label>   </div> 
                    <div className="restricao-input-item">        <input className="input-item-restricao" type="radio"></input>   <label className="label-diet-item">Legumes</label> </div> 
                    <div className="restricao-input-item">        <input className="input-item-restricao" type="radio"></input>   <label className="label-diet-item">Laticíneos</label>  </div> 
               
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