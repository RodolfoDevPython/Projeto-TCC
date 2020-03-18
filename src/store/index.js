import { createStore } from "redux";

import rootReducers from "./reducers";
//importando o reducers/index.js com os combiners(que seria os outros reducers) configurados

const store = createStore(rootReducers);

export default store;