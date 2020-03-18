import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../../components/buttons";
import NavigationBar from "../../components/NavigationBar";
import Carrossel from "../../components/carrossel";
import ContainerServico from "../../components/container-servico";
import ContainerAgenda from "../../components/container-agenda";

import "./style.css";
import { useSelector } from "react-redux";

export default function Main() {
    /*Parte de serviços */
    const rdx_login = useSelector( state => state.login);

    function ShowDivs(elem){
        console.log(elem)
    }
    
    console.log(rdx_login)

    return (
        <>
            {
             !rdx_login.login_ok ? <Buttons /> : null
            }
            
            <NavigationBar/>
            <Carrossel />
            
            <div className="main">
                <ContainerServico />
                
                <ContainerAgenda />
                
                <div id="como-chegar" className="align-left contents-main">
                    <a hidden name="como-chegar"></a>
                    <div className="content-como-chegar" >
                        <h2 className="como-chegar" >Como Chegar</h2>

                        <figure>
                            <img src="img-como-chegar.png" />
                            <figcaption>
                                <a>
                                    Rua dos Cajueiros. Parque Santana 2. SP
                                </a>
                                <img src="localizacao.gif"/>
                            </figcaption>
                        </figure>
                        
                    </div>
                </div>
                <div id="quem-somos" className="align-left contents-main">
                    <a hidden name="quem-somos"></a>
                    <div>
                        <h2 className="quem-somos" >Quem somos</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
          
        </>
    );
} 


//PAREII AQUI...
