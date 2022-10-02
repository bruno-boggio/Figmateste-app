import React from "react";
import NavBar from "./Components/NavBar";
import CardSobre from "./Components/CardSobre";
import CardObjetivo from "./Components/CardObjetivo";
import CardDieta from "./Components/CardDieta";
import CardRefeicoes from "./Components/CardRefeicoes";
import CardRestricao from "./Components/CardRestricao";
import CardDficuldadeDieta from "./Components/CardDificuldadeDieta";
import CardInvestimentoDieta from "./Components/CardInvestimentoDieta";

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
    </div>
  );
}

export default App;
