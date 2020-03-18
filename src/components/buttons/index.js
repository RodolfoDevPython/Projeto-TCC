import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

export default function Buttons() {

    const location = useHistory();

    return (
        <>
            <nav className="NavBarLogin">
                <button onClick={() => location.push("/login") } > Login  </button>
                <button onClick={() => location.push("/cadastro") } > Cadastro </button> 
            </nav>
        </>
    );
} 