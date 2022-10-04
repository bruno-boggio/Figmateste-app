import React, {useState} from "react";
import SetaDireita from '../Assets/seta-direita.png'

const CardObjetivo = () => {

    const [list,setlist] = useState(false)

        return(
            <div className="div-objective">

                <div className="objective-text">   
                   <h1 className="objective-text-h1">Qual é o seu</h1>
                   <h1 className="objective-text-h1">objetivo principal?</h1>
                </div>

                <div className="div-objective-options">
                       <div className="objective-options">
                            <img onClick={()=> setlist(!list)} className="objective-setadireita" alt="seta opções" src={SetaDireita}></img>  
                            <button className="objective-list-p">Emagrecer</button>    
                            {list === false ? null : 
                            <ul>
                                <button className="objective-list-p"><strong>Manter peso</strong></button>
                                <button className="objective-list-p">Ganhe saúde</button>
                                <button className="objective-list-p">Ganhar massa</button>
                            </ul>}
                        

                       </div> 
                </div>

            </div>
        )
}


export default CardObjetivo;