import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import "./style.css";

import FormServico from "../../components/form1-servicos";
import FormFuncionario from "../../components/form2-servicos";
import FormDataHora from "../../components/form3-servicos";

export default function HomePage(params) {
    
    const [ info, setInfo ] = useState({
        funcionario : "",
        servico : "",
        data : "",
        horario : "",
    });

    const [ resp , setResp ] = useState({
        res_servico : ["ESCOLHA SEU SERVIÇO", "1", "2"],
        res_funcionario : [],
        res_data : [],
        res_horario : [],
    });

    const [ frmServico , setFrmServico ] = useState(true);
    const [ frmFuncionario , setFrmFuncionario ] = useState(false);
    const [ frmDataHora , setFrmDataHora ] = useState(false);

    
    const location = useHistory();

    function setValor(ele) {

        console.log(ele.target.value)
        console.log(info)

    }
    
    function handleForms(el) {

        el.target.style = "background: yellow;"
        const dado = el.target.className

    }

    return (
        <>
            <div className="template-form">
                <nav className="menu-lateral">
                    <ul>

                        <li className="servico" 
                            onClick={ () => { 
                                setFrmServico(true) 
                                setFrmFuncionario(false)
                                setFrmDataHora(false) } 
                            } 
                        >Serviços</li>

                        <li className="funcionario" 
                            onClick={ () => { 
                                setFrmServico(false) 
                                setFrmFuncionario(true)
                                setFrmDataHora(false) } 
                            } 
                        >Funcionario</li>

                        <li className="dia_hora" 
                            onClick={ () => { 
                                setFrmServico(false) 
                                setFrmFuncionario(false)
                                setFrmDataHora(true) } 
                            } 
                        >Data e Hora</li>

                    </ul>
                </nav>
                <div className="container-frms" >
                    { frmServico ? <FormServico /> : null }
                    { frmFuncionario ? <FormFuncionario /> : null }
                    { frmDataHora ? <FormDataHora /> : null }
                </div>
            </div>
        </>
    );

}