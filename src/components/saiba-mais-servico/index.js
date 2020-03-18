import React from "react";
import "./style.css";


export default function SaibaMaisServico() { 

    function Volta() {

        document.querySelector("section.content-servico").style = "display: block;"
        document.querySelector("section.saiba-mais").style = "opacity: 0; height: 0; width: 0; overflow: hidden;" 

    }

    return(
        <>
            <section className="saiba-mais">                
                <h2>Serviços</h2>
                
                <div className="lista-servicos">
                    
                        <figure>
                            <img src="secretaria.jpg" />
                            <figcaption>conteudo</figcaption>
                        </figure>
                    
                    
                        <figure>
                            <img src="secretaria.jpg" />
                            <figcaption>conteudo</figcaption>
                        </figure>
                    
                        <figure>
                            <img src="secretaria.jpg" />
                            <figcaption>conteudo</figcaption>
                        </figure>
                    
                        <figure>
                            <img src="secretaria.jpg" />
                            <figcaption>conteudo</figcaption>
                        </figure>
                    
                </div>
                <button className="volta-servico" onClick={ Volta } >Voltar</button>
            </section>
        </>
    );
}