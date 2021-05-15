import axios from '../../api/axios'
import { localStorageRemove, localStorageSet } from '../../util/localStorage'
import { LOGIN, AUTH_FAIL, SIGN_OUT } from '../constants/authConstants'

export const signup = (firstName, lastName, email, password) => async dispatch => {
    // const response = await axios.post('/users/signup', { firstName, lastName, email, password })
    // localStorageSet('firstName', firstName)
    // localStorageSet('token', token)
}

export const login = (email, password) => async dispatch => {
    try {
        const { data: { data: { firstName, token } } } = await axios.post('/users/login', { email, password })
        localStorageSet('firstName', firstName)
        localStorageSet('token', token)
        dispatch({ type: LOGIN, payload: { firstName, token } })
    } catch (error) {
        dispatch({ type: AUTH_FAIL, payload: { errorMessage: error.response.data.error } })
    }
}

export const signout = () => dispatch => {
    localStorageRemove('firstName')
    localStorageRemove('token')
    dispatch({ type: SIGN_OUT })
}

export const setError = errorMessage => async dispatch => {
    return dispatch({ type: AUTH_FAIL, payload: { errorMessage } })
}
