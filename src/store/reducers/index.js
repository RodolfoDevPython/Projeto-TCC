import { combineReducers } from "redux";
//usado para quando temos muitos reducers 

import login from "./login";
import chooseServices from "./chooseService";

export default combineReducers({
    login,
    chooseServices
});

/*
{
    login: { ... objetos de informaçoes},
    outro Reducer : { ... objetos de informaçoes }
}
*/