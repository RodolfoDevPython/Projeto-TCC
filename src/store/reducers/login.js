const INITIAL_STATE = {
    login: {
        usuario : "",
        senha : "",
        login_ok: false,
    }
}

export default function login(state = INITIAL_STATE, action) {
//state é o estado anterior
//action seria a ação do usuario

//Definindo o states do login para ser compartilhado com outros componentes
    
    switch (action.type) {

        case "ACESS_LOGIN":
            return { ...state, login: action.login  } ;
        default:
            return state;
    }

}