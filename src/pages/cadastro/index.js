import React , { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

//Parei aqui para ele exibir a mensagem do servidor
import api from "../../services/api";


export default function Cadastro() {

    const [ message , setMessage ] = useState(["Seja Bem Vindo"]); 

    const [ info , setInfo] = useState({ 
        nome : "",
        endereco : "",
        telefone : "",
        email : "",
        senha : ""
    });
    
    useEffect(() => {
        window.alert(message);
    }, [ message ] );

    
    async function Cadastrar(elem) {
        
        if (info.nome == "" || info.senha == "" || info.telefone == "" || info.endereco == "" || info.email == "") {
            elem.target.disabled = true
            elem.target.style = "cursor: no-drop;"
            return
        }
        console.log(info)  
        try {

            const request = await api.post("/usuario", {
                "nome": info.nome,
                "endereco": info.endereco,
                "telefone": info.telefone,
                "senha_pre_hash": info.senha
            });
            
            setMessage(request.data.message);
            
        } catch(erro) {
            console.log(erro)
        }

    }
     
    return (
        <div>
            <form className="FormCadastro" >
                <input 
                    className="nome" 
                    type="text" 
                    placeholder="Nome" 
                    onBlur={ (elem) => setInfo( { ...info, nome : elem.target.value } ) }
                />
                <input 
                    className="tel" 
                    type="text" 
                    placeholder="Telefone" 
                    onBlur={ (elem) => setInfo( { ...info, telefone : elem.target.value } ) }
                />
                <input 
                    className="endereco" 
                    type="text" 
                    placeholder="Endereço"
                    onBlur={ (elem) => setInfo( { ...info, endereco : elem.target.value } ) }
                />
                <input 
                    className="email" 
                    type="text" 
                    placeholder="Email"
                    onBlur={ (elem) => setInfo( { ...info, email : elem.target.value } ) }
                />
                <input 
                    className="senha" 
                    type="text" 
                    placeholder="Senha"
                    onBlur={ (elem) => setInfo( { ...info, senha : elem.target.value } ) }
                />
                <input 
                    type="button" 
                    onClick={ (elem) => Cadastrar(elem) } 
                    value="Cadastro"
                />
                <Link to={"/login"}>Já tenho Cadastro</Link>
            </form>    
            
        </div>
    );
}