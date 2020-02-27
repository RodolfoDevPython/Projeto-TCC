import React ,{ useState, useEffect } from "react";
import "./style.css"; 

export default function NavigationBar() {

    const [ valor, setValor ] = useState([]);

    useEffect(() => {

        document.querySelectorAll("h2").forEach( (elem, idx) => elem.style="background: #da552f; color: white;" );

        if (valor != "") {
            document.querySelector(`.${valor}`).style="background: white; color: #da552f; border: 2px #da552f solid;";
        }

    }, [ valor ]);

    function handleRedirect(elem) {
        
        const el = elem.target
        
        const valor = el.getAttribute("dir");
        
        setValor(valor);

        window.location.href = `#${valor}`
        console.log(valor)
    }
    
    function click(elem) {
        
        const elem_lista = document.querySelector("nav.NavigationBar ul.describe");

        if ( elem.target.getAttribute("handle") == "false" ) {

            elem_lista.style = " display: none;" 
            elem.target.setAttribute("handle", "true");  
            return

        }

        elem_lista.style = "display: flex;" 
        elem.target.setAttribute("handle", "false");  

    }

    return(
        <>
            <div className='template-button'>
                <button onClick={click} handle="false" ></button>
            </div>
            <nav className="NavigationBar">
                <ul className="describe">
                    <li onClick={ handleRedirect } dir="servico" >Serviços</li>
                    <li onClick={ handleRedirect } dir="agendamentos" >Agendamentos</li>
                    <li onClick={ handleRedirect } dir="quem-somos" >Quem somos</li>
                    <li onClick={ handleRedirect } dir="como-chegar" >Como chegar</li>
                </ul>
            </nav>
        </>
    );
    
}
