import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from "./pages/login";
import Main from "./pages/main";
import Cadastro from "./pages/cadastro";
import Home from "./pages/home-page";
import Servico from "./pages/servicos";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/servicos-detalhes" component={Servico} />
        </Switch>
        
    </BrowserRouter>
);

export default Routes;