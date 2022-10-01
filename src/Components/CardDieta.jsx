import React from "react";
import Brocolis from '../Assets/brocolis.png'

const CardDieta = () => {
    return (
        <div className="div-dieta">   

                <div className="diet-text">   
                   <p>Qual tipo de dieta</p>
                   <p>você gostaria?</p>
                </div>

        <div className="diet-container-items">

                <div className="diet-col-1">
                    <div className="brocolis-div">  <img src={Brocolis} className="brocolis" alt="brocolis"></img>    </div>
                    <div className="brocolis-div">  <img src={Brocolis} className="brocolis" alt="brocolis"></img>    </div>
                    <div className="brocolis-div">  <img src={Brocolis} className="brocolis" alt="brocolis"></img>    </div>
                </div> 

                <div className="diet-div-items">
                    <div className="diet-input-item">    <input className="" type="radio"></input>  <label>Equilibrada</label>  </div> 
                    <div className="diet-input-item">    <input className="" type="radio"></input>  <label>Paleolítica</label>    </div> 
                    <div className="diet-input-item">    <input className="" type="radio"></input>  <label>Cetogênica</label> </div> 
                </div>    

                <div className="diet-col-1">
                    <div className="brocolis-div">      <img src={Brocolis} className="brocolis" alt="brocolis"></img>  </div>
                    <div className="brocolis-div">      <img src={Brocolis} className="brocolis" alt="brocolis"></img>  </div>
                    <div className="brocolis-div">      <img src={Brocolis} className="brocolis" alt="brocolis"></img>  </div>
                </div> 

                <div className="diet-div-items">
                    <div className="diet-input-item">     <input type="radio"></input>  <label>Vegetariana</label>    </div> 
                    <div className="diet-input-item">     <input type="radio"></input>  <label>Jejum</label>  </div> 
                    <div className="diet-input-item">     <input type="radio"></input>  <label>Sem lactose</label>    </div> 
                </div>   

                <div className="diet-col-1">
                    <div className="brocolis-div">      <img src={Brocolis} className="brocolis" alt="brocolis"></img>  </div>
                    <div className="brocolis-div">      <img src={Brocolis} className="brocolis" alt="brocolis"></img>  </div>
                    <div className="brocolis-div">      <img src={Brocolis} className="brocolis" alt="brocolis"></img>  </div>
                </div> 

                <div className="diet-div-items">
                    <div className="diet-input-item">        <input type="radio"></input>   <label>Vegana</label>   </div> 
                    <div className="diet-input-item">        <input type="radio"></input>   <label>Low carb</label> </div> 
                    <div className="diet-input-item">        <input type="radio"></input>   <label>Sem lactose</label>  </div> 
                </div>   

            </div>


        </div>
    )
}

export default CardDieta;