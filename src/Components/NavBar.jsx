import React from "react";
import Logo from '../Assets/minna.png'
import bgImg from '../Assets/bg-navbar.png'

const NavBar = () => {
    return (

        <div>
          <div className="app">

            <div className="navbar-container">
                    <img className="logo" src={Logo} alt="Logo Minna"></img>

                <div> 
                    <ul className="navbar-menu">
                        <li>Como fazemos</li>
                        <li>Planos e Preços</li>
                        <li>Receitas</li>
                        <li>Sobre nós</li>
                    </ul>
                </div>

            

               <div className="navbar-div-btn">
                   <div className="nav-btn">
                    <button className="navbar-btn-sub">Inscreva-se</button>
                    <button className="navbar-btn-log">LOGIN</button>
                    </div>  
                   {/*} <img className="bg-header" src={bgImg} alt="img header"></img> {*/}
                </div>
                
            </div>
                <div className="navbar-h1">
                        <h1>Planejamos</h1>   
                        <h1>tudo para você!</h1>   
                        <button className="navbar-btn-h1">Começar agora</button>
                </div>        
            </div> 
        </div>
)}

export default NavBar;