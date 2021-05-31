import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import authReducer from './redux/reducers/authReducer'
import productsReducer from './redux/reducers/productsReducer'

const reducer = combineReducers({
    auth: authReducer,
    products: productsReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
