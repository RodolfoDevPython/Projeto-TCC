import React , { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import "./style.css";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default function Login() {

    const [ info , setInfo ] = useState({
        usuario : "",
        senha : "",
    });

    const location = useHistory();

    const [ mensage , setMensage ] = useState(["Faça Seu Login"]);

    useEffect( () => {

        window.alert(mensage)
        
    }, [ mensage ] );


    function  handlerInputs(elem){
        const prop = elem.target
        
        switch (prop.className) {
            case "usuario":
                setInfo({...info, usuario : prop.value })        
                break;
            case "senha":
                setInfo({...info, senha : prop.value })        
                break;
            default:
                break;
        }

    }

    async function handlerLogin(elem) {
        
        const response = await api.post("/usuario/login", {
            "nome": info.usuario,
            "senha_pre_hash": info.senha
        });

        setMensage(response.data.message)
        
        if (!response.data.login_ok)  return console.log(response.data);

        location.push("/home");

    }

    return (

        <div>
            
            <form className="FormLogin" >

                <input 
                    type="text" 
                    className="usuario" 
                    placeholder="Digite seu Nome : " 
                    onBlur={ handlerInputs }
                />

                <input 
                    type="text" 
                    className="senha" 
                    placeholder="Digite sua Senha : " 
                    onBlur={ handlerInputs }
                />

                <input type="button" value="ENVIAR" onClick={ (elem) => handlerLogin(elem) } />

                <Link to={'/home'} > Acessar </Link>

            </form>

        </div>            

    );
}