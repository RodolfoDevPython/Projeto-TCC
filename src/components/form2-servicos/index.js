import React, { useState, useEffect } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";

export default function FrmFuncionario() {
    const dispatch = useDispatch();

    const [ funcionario , SetFuncionario ] = useState("");    
    const dado = useSelector( state => state.chooseServices, [funcionario] );

    useEffect( () => {
        dispatch({ type: "ACTION_CHOOSE_FUNCIONARIOS" , funcionario })
    }, [ funcionario ] );

    console.log(dado)
    return (
        <div id="template-frm-funcio" >
            <div id="grid-funcionarios" >

                <div className="itens" onClick={ (ele) => SetFuncionario(ele.target.innerText) } >funcionario 1</div>
                <div className="itens" onClick={ (ele) => SetFuncionario(ele.target.innerText) } >funcionario 2</div>
                <div className="itens" onClick={ (ele) => SetFuncionario(ele.target.innerText) } >funcionario 3</div>
                <div className="itens" onClick={ (ele) => SetFuncionario(ele.target.innerText) } >funcionario 4</div>

            </div>
        </div>
    );
}