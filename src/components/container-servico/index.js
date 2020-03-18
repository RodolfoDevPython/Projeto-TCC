import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import "./style.css";
import SaibaMaisServico from "../saiba-mais-servico";

export default function ContainerServico() {

    const [ valor , setValor ] = useState([]);

    const location = useHistory();

    useEffect( () => {
        console.log("Valor alterado")
        console.log(valor)
    } , [ valor ] );

    function handleImagens(elem) {

        const h3 = document.querySelector("#servicos > aside > div > h3")
        const valor = elem.target.getAttribute("name")

        h3.innerText = valor

        setValor(valor)

    }

    function handleButton(elem) {

        const el = elem.target
        console.log(el)

        document.querySelector("section.content-servico").style = "transition: opacity 4s ease-out; opacity: 0; height: 0; width: 0; overflow: hidden; "

        document.querySelector("section.saiba-mais").style = "opacity: 1; height: auto; width: 100%; background: green;" 

    }

    return(
        <div id="servicos" className="align-left contents-main">
            <section className="content-servico">
                <h2 className="servico" >Serviços</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>    
            </section>
            
            <aside>
                <div className = "choose-servico" >
                    <figure>
                        <img src="secretaria.jpg" />
                        <figcaption>
                            <img className="unha" name="unhas" onClick={ handleImagens } src="unha.png" height="100" /> 
                            <img className="barba" name="cortes de cabelos" onClick={ handleImagens } src="barbeiro.png" height="100" />
                            <img className="corante" name="Tinturas"  onClick={ handleImagens } src="corante.png" height="100" />
                        </figcaption>
                    </figure>
                    <h3>Imagens</h3>
                    
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <button onClick={ handleButton } >saiba mais</button>
                </div>
            </aside>
            <SaibaMaisServico />
            <a hidden name="servico"></a>
        </div>
    );
}