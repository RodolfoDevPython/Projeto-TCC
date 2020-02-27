import React from "react";

import Routes from "./routes";
//import BtnVoltar from "./components/Btnvoltar";
import "./style.css";

/*
Utilizando o Padrão de hooks vamos em vez de usar a class 
vamos basicamente exportar uma função q carregue o jsx
*/
export default function App() {

    return (
        <>
            <Routes /> 
        </>
    );
    
}

