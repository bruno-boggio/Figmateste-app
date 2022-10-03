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
                            <p className="objective-list-p">Emagrecer</p>    
                            {list === false ? null : 
                            <ul>
                                <p className="objective-list-p"><strong>Manter peso</strong></p>
                                <p className="objective-list-p">Ganhe saúde</p>
                                <p className="objective-list-p">Ganhar massa muscular</p>
                            </ul>}
                        

                       </div> 
                </div>

            </div>
        )
}


export default CardObjetivo;