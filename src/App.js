import React from "react";
import NavBar from "./Components/NavBar";
import CardSobre from "./Components/CardSobre";
import CardObjetivo from "./Components/CardObjetivo";
import CardDieta from "./Components/CardDieta";
import CardRefeicoes from "./Components/CardRefeicoes";
import CardRestricao from "./Components/CardRestricao";
import CardDficuldadeDieta from "./Components/CardDificuldadeDieta";
import CardInvestimentoDieta from "./Components/CardInvestimentoDieta";
import CardSuplementos from "./Components/CardSuplementos";
import CardExercicio from "./Components/CardExercicio";
import CardComeceAgora from "./Components/CardComeceAgora";
import CardPlanos from "./Components/CardPlanos";


function App() {
  return (
    <div>
        <NavBar /> 
        <CardSobre />
        <CardObjetivo />
        <CardDieta />
        <CardRefeicoes />
        <CardRestricao />
        <CardDficuldadeDieta />  
        <CardInvestimentoDieta />
        <CardSuplementos />
        <CardExercicio />
        <CardComeceAgora />
        <CardPlanos />
    </div>
  );
}

export default App;
