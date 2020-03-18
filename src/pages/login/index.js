import React , { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import "./style.css";
import api from "../../services/api";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux"

export default function Login() {

    const [ info , setInfo ] = useState({
        usuario : "",
        senha : "",
        login_ok: false,
    });

    const location = useHistory();

    const rdx_login = useSelector( state => state.login,[ info ] )//redux state -> [] isso ele usa o msm do useEffect para escultar a  variavel
    const dispatch = useDispatch();//redux action

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
        
        /*const response = await api.post("/usuario/login", {
            "nome": info.usuario,
            "senha_pre_hash": info.senha
        });*/

        //setMensage(response.data.message)
        
        //if (!response.data.login_ok)  return console.log(response.data);

        //location.push("/home");
        const login = info
        console.log(login)
        dispatch({ type: "ACESS_LOGIN", login})
        console.log(rdx_login)

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