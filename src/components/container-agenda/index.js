import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./style.css";

export default function ContainerAgenda() {

    const rdx_login = useSelector( state => state.login);
    const location = useHistory();
    
    function redirectAgendamento() {

        console.log(rdx_login)

        if (!rdx_login.login_ok) return location.push("/login");
        
        location.push("/home")

    }
    
    return (
        <>
            <div id="agendamentos" className="align-left contents-main" >
                <a hidden name="agendamentos"></a>
                <div>
                    <h2 className="agendamentos" >Agendamentos</h2>
                    <figure>
                        <figcaption>
                            faça o seu Agendamento
                            <img className="agenda" src="create-agendamento.gif" onClick={ redirectAgendamento } />
                        </figcaption>    
                        <img src="agendamento.png" /> 
                    </figure>                    
                </div>
            </div>
        </>
    );
}