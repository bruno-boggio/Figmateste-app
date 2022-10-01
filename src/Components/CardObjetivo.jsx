import React, {useState} from "react";
import SetaDireita from '../Assets/seta-direita.png'
import SetaBaixo from '../Assets/seta-baixo.png'

const CardObjetivo = () => {

    const [list,setlist] = useState(false)

        return(
            <div className="div-objective">

                <div className="objective-text">   
                   <p>Qual é o seu</p>
                   <p>objetivo principal?</p>
                </div>

                <div className="div-objective-options">
                       <div className="objective-options">
                            <img onClick={()=> setlist(!list)} className="objective-setadireita" alt="seta opções" src={list ? SetaBaixo : SetaDireita}></img>  
                            <p>Emagrecer</p>    
                            {list === false ? null : 
                            <ul>
                                <p><strong>Manter peso</strong></p>
                                <p>Ganhe saúde</p>
                                <p>Ganhar massa muscular</p>
                            </ul>}
                        

                       </div> 
                </div>

            </div>
        )
}


export default CardObjetivo;