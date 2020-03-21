import React from "react";
import { useSelector } from "react-redux";

export default function FrmDataHora(){

    const dados = useSelector( state => state.chooseServices );

    console.log(dados)

    return (
        <>
            <h1>INFORMAÇÕES DO DATA E HORA</h1>
        </>
    );
}