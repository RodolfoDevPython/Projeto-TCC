const INITIAL_STATE = {
    servicos: {
        servicos: [],
        tipo: 0,    
        completed: false,
    },
    funcionario: {
        funcionario : [],
        completed: false,
    },
    horarios: {
        horarios: [],
        completed: false,
    }
}

export default function ChooseService(state = INITIAL_STATE, action ) {
    console.log(action) 
    switch (action.type) {
        case "ACTION_CHOOSE_SERVICES": 
            return { ...state, servicos: action.info , completed: action.completed };
        case "ACTION_CHOOSE_FUNCIONARIOS":
            return { ...state , funcionario: action.funcionario }
        case "ACTION_CHOOSE_HORARIOS":
            return { ...state }
        default:

            return state;
    }

}