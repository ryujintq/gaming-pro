import { CLEAR_PRODUCTS, SET_PRODUCTS, SET_PRODUCTS_LOADING } from "../constants/productConstants"

const initialState = {
    products: [], loading: false
}

const productsReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_PRODUCTS:
            const { products } = payload
            return { ...state, products, loading: false }
        case CLEAR_PRODUCTS:
            return { ...state, products: [] }
        case SET_PRODUCTS_LOADING:
            const { loading } = payload
            return { ...state, loading }
        default:
            return state
    }
}

export default productsReducer
