import React ,{ useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

export default function FormServicos() {

    
    const [ info, setInfo ] = useState({
        servico : "",
        tipo: 0,
        completed: false
    });

    const dispatch = useDispatch();

    //const location = useHistory();

    const [ resp , setResp ] = useState({
        res_servico : ["ESCOLHA SEU SERVIÇO", "1", "2"],
        res_funcionario : [],
        res_data : [],
        res_horario : [],
    });

    //const dados = [1,2,6];
    //dispatch({ type: "ACTION_CHOOSE_SERVICES", dados });

    useEffect( () => {

        if (info.tipo != 0 || info.tipo != "" ) {

            dispatch({ type: "ACTION_CHOOSE_SERVICES", info });
            
        }

    }, [info.servico]);

    function handler(ele) {

        const itens = document.querySelectorAll("form > div > div.display-grid > input.item");

        itens.forEach( (e, i) => {
            e.style = "cursor: no-drop; opacity: 0.5;"
            e.disabled = true
        });

        ele.disabled = false
        ele.style = "background: cyan; cursor: pointer; opacity: 1; font-size: 12pt;"

        console.log(ele.value)

        setInfo({ ...info, servico: ele.value });
        
    }

    function SetTypeService() {

        const select = document.querySelector("select");
        const opt = select.options[select.selectedIndex];

        setInfo({ ...info, tipo: opt.innerText });
        //aqui vai setar uma flag de completed
        //para q o componente menu lateral seja avisado que já foi preenchido tudo
    }

    return (
        <>
            <form className="agendamento">

                <label> Tipo de Serviço </label>
                <select onBlur={ SetTypeService } >
                {
                    resp.res_servico.map( (el, idx) => (
                        <option  key={idx}> {el} </option>) 
                    )
                }
                </select>

                <label>Escolha até 3 itens : </label>

                <div className="carousel" >

                    <div className='prev-servico'>
                        {/* imagem de seta prev */}
                    </div>
                    <div className='display-grid'>

                        <input className='item' onClick={ (ele) => { 
                                    handler(ele.target)
                            } } 
                            type="button" 
                            value="servico 1"/>

                        <input className='item' onClick={ (ele) => { 
                                console.log(ele.target) 
                            } }
                            type="button"
                            value="servico 2" />

                        <input className='item' onClick={ (ele) => console.log(ele.target) }      
                            type="button"
                            value="servico 3"/>

                        <input className='item' onClick={ (ele) => console.log(ele.target) }  
                            type="button"
                            value="servico 4" />

                        <input className='item' onClick={ (ele) => console.log(ele.target) } 
                            type="button"
                            value="servico 5" />

                    </div>
                    <div className='next-servico'>
                        {/* imagem de seta next */}
                    </div>
                    
                </div>
            </form>
        </>
    );
}