import React, { useState } from "react";
import api from "../../services/api";
import "./style.css";

export default function HomePage(params) {
    
    const [ info, setInfo ] = useState({
        funcionario : "",
        servico : "",
        data : "",
        horario : "",
    });

    const [ resp , setResp ] = useState({
        res_servico : [],
        res_funcionario : [],
        res_data : [],
        res_horario : [],
    });

    async function handler(){
        
        const response = await api.post("", );
    
    }
    
    return (
        <>
            <form className="agendamento">

                <input type="text" className="servico" placeholder="Serviço" />
                <select>
                    <option>
                        teste 1
                    </option>
                </select>
                <input type="text" className="funcionario" placeholder="Funcionario" />
                <input type="text" className="data" placeholder="Data" />
                <input type="text" className="horario" placeholder="Horario" />
                <input type="button" value="Agendar" />

            </form>
        </>
    );
}