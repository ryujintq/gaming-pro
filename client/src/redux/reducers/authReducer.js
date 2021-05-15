import { localStorageGet } from "../../util/localStorage"
import { LOGIN, AUTH_FAIL, SIGN_OUT } from "../constants/authConstants"

const authReducer = (state = { firstName: localStorageGet('firstName'), loading: false, token: localStorageGet('token'), error: '' }, action) => {
    const { type, payload } = action

    switch (type) {
        case LOGIN:
            const { firstName, token } = payload
            return { ...state, firstName, token }
        case SIGN_OUT:
            return { ...state, firstName: '', token: '' }
        case AUTH_FAIL:
            const { errorMessage } = payload
            return { ...state, error: errorMessage }
        default:
            return state
    }
}

export default authReducer
