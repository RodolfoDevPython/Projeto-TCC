const INITIAL_STATE = {
    servicos: []
}

export default function ChooseService(state = INITIAL_STATE, action ) {
    console.log(action)
    switch (action.type) {
        case "ACTION_CHOOSE_SERVICES": 
            return { ...state, servicos: action.dados };
    
        default:

            return state;
    }

}