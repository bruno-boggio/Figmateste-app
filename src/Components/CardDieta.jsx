import React from "react";
import Brocolis from '../Assets/brocolis.png'

const CardDieta = () => {
    return (
        <div className="div-dieta">   

                <div className="diet-text">   
                   <h1 className="objective-text-h1">Qual tipo de dieta</h1>
                   <h1 className="objective-text-h1">você gostaria?</h1>
                </div>

        <div className="diet-container-items">

                <div className="diet-col-1">
                    <div className="brocolis-div">  <img src={Brocolis} className="brocolis" alt="brocolis"></img>    </div>
                    <div className="brocolis-div">  <img src={Brocolis} className="brocolis" alt="brocolis"></img>    </div>
                    <div className="brocolis-div">  <img src={Brocolis} className="brocolis" alt="brocolis"></img>    </div>
                </div> 

                <div className="diet-div-items">
                    <div className="diet-input-item">    <input className="input-item-diet" type="radio"></input>  <label className="label-diet-item">Equilibrada</label>  </div> 
                    <div className="diet-input-item">    <input className="input-item-diet" type="radio"></input>  <label className="label-diet-item">Paleolítica</label>    </div> 
                    <div className="diet-input-item">    <input className="input-item-diet" type="radio"></input>  <label className="label-diet-item">Cetogênica</label> </div> 
                </div>    

                <div className="diet-col-1">
                    <div className="brocolis-div">      <img src={Brocolis} className="brocolis" alt="brocolis"></img>  </div>
                    <div className="brocolis-div">      <img src={Brocolis} className="brocolis" alt="brocolis"></img>  </div>
                    <div className="brocolis-div">      <img src={Brocolis} className="brocolis" alt="brocolis"></img>  </div>
                </div> 

                <div className="diet-div-items">
                    <div className="diet-input-item">     <input className="input-item-diet" type="radio"></input>  <label className="label-diet-item">Vegetariana</label>    </div> 
                    <div className="diet-input-item">     <input className="input-item-diet" type="radio"></input>  <label className="label-diet-item">Jejum</label>  </div> 
                    <div className="diet-input-item">     <input className="input-item-diet" type="radio"></input>  <label className="label-diet-item">Sem lactose</label>    </div> 
                </div>   

                <div className="diet-col-1">
                    <div className="brocolis-div">      <img src={Brocolis} className="brocolis" alt="brocolis"></img>  </div>
                    <div className="brocolis-div">      <img src={Brocolis} className="brocolis" alt="brocolis"></img>  </div>
                    <div className="brocolis-div">      <img src={Brocolis} className="brocolis" alt="brocolis"></img>  </div>
                </div> 

                <div className="diet-div-items">
                    <div className="diet-input-item">        <input type="radio"></input>   <label className="label-diet-item">Vegana</label>   </div> 
                    <div className="diet-input-item">        <input type="radio"></input>   <label className="label-diet-item">Low carb</label> </div> 
                    <div className="diet-input-item">        <input type="radio"></input>   <label className="label-diet-item">Sem lactose</label>  </div> 
                </div>   

            </div>


        </div>
    )
}

export default CardDieta;