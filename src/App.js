import React from "react";

import Routes from "./routes";
import Header from "../src/components/header";
import Footer from "../src/components/footer";

import "./style.css";


//importando o provider do redux para compartilhar com todos os componentes
import { Provider } from "react-redux";
import store from "./store";


/*
Utilizando o Padrão de hooks vamos em vez de usar a class 
vamos basicamente exportar uma função q carregue o jsx
*/
export default function App() {

    return (
        <Provider store={store}>  
            <Header />
            <Routes />
            <Footer /> 
        </Provider>
    );
    
}

