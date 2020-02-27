import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ButtonVoltar() {

    //const reload = useState([ false ]);

    /*useEffect({
        
    }, [ reload ] );*/

    return (
        <div>
            <Link to={'/'} > Voltar Tudo </Link>
            <Link to={'/home'} > Voltar </Link>
        </div>
    );
}