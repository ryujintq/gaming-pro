import axios from '../../api/axios'
import { SET_PRODUCTS, CLEAR_PRODUCTS, SET_PRODUCTS_LOADING } from '../constants/productConstants'

export const getProducts = category => async dispatch => {
    try {
        dispatch({ type: SET_PRODUCTS_LOADING, payload: { loading: true } })
        const { data: { data: products } } = await axios.get(`/products/${category}`)
        dispatch({ type: SET_PRODUCTS, payload: { products } })
    } catch (error) {
        console.log(error)
    }
}

export const clearProducts = () => async dispatch => {
    dispatch({ type: CLEAR_PRODUCTS })
}