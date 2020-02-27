import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import Carrossel from "../../components/carrossel";
import Header from "../../components/header";
import Footer from "../../components/footer";

import "./style.css";


export default function Main() {
    /**/
    function handleImagens(elem) {
        
    }

    return (
        <>
            <Header />
            <nav className="NavBarLogin">
                <Link to={"/login"}> Login </Link> 
                <Link to={"/cadastro"}> Cadastro </Link>          
            </nav>
            <NavigationBar/>
            <Carrossel />
            
            <div className="main">
                <div id="servicos" className="align-left contents-main">
                    <section className="content-servico">
                        <h2 className="servico" >Serviços</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>    
                    </section>
                    
                    <aside>
                        <div>
                            <figure>
                                <img src="secretaria.jpg" />
                                <figcaption>
                                    <img className="unha" src="unha.png" height="100" /> 
                                    <img className="barba" src="barbeiro.png" height="100" />
                                    <img className="corante" src="corante.png" height="100" />
                                </figcaption>
                            </figure>
                            <h3>Imagens</h3>
                            
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </aside>
                    <a hidden name="servico"></a>
                </div>

                <div id="agendamentos" className="align-left contents-main">
                    <a hidden name="agendamentos"></a>
                    <div>
                        <h2 className="agendamentos" >Agendamentos</h2>
                        <figure>
                            <figcaption>
                                faça o seu Agendamento
                                <img src="create-agendamento.gif" />
                            </figcaption>    

                            <img src="agendamento.png" /> 
                        </figure>                
                    </div>
                </div>
                
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
            <Footer />
        </>
    );
} 


//PAREII AQUI...
