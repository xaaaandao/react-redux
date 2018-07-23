const userKey = '_mymoney_user'
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
         /**
         * Token é validado pode ser true ou false
         */
        case 'TOKEN_VALIDATED':
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                /**
                 * Garante que o usuário não está logado
                 */
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        
        /**
         * Quando o usuário é obtido (ex. logado)
         */
        case 'USER_FETCHED':
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }
        default:
            return state
    }
}