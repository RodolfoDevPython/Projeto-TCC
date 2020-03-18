import React ,{ useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

export default function FormServicos() {

    const [ info, setInfo ] = useState({
        servico : "",
        tipo: 0,
    });

    const dispatch = useDispatch();
    const dado = useSelector( state => state.chooseServices , [info] );

    const location = useHistory();

    const [ resp , setResp ] = useState({
        res_servico : ["ESCOLHA SEU SERVIÇO", "1", "2"],
        res_funcionario : [],
        res_data : [],
        res_horario : [],
    });

    //const dados = [1,2,6];
    //dispatch({ type: "ACTION_CHOOSE_SERVICES", dados });

    function handler(ele) {

        const itens = document.querySelectorAll("form > div > div.display-grid > div.item");

        itens.forEach( (e, i) => {
            e.style = "cursor: no-drop; opacity: 0.5;"
        });

        ele.style = "background: cyan; cursor: pointer; opacity: 1; font-size: 12pt;"
        
        setInfo({ ...info ,servico: ele.innerText });
        console.log(info);
        
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

                        <div onClick={ (ele) => { 
                                console.log(ele.target) 
                                    handler(ele.target)
                                } 
                            } 
                            className='item'
                        >servico 1</div>

                        <div onClick={ (ele) => { 
                                console.log(ele.target) 
                            } }  
                            className='item'>servico 2</div>

                        <div onClick={ (ele) => console.log(ele.target) }  
                            className='item'>servico 2</div>

                        <div onClick={ (ele) => console.log(ele.target) }  
                            className='item'>servico 2</div>

                        <div onClick={ (ele) => console.log(ele.target) } 
                            className='item'>servico 2</div>

                    </div>
                    <div className='next-servico'>
                        {/* imagem de seta next */}
                    </div>
                    
                </div>
            </form>
        </>
    );
}