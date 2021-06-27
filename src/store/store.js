import {createStore, combineReducers} from 'redux'
import listaReducer from './lista/lista.reducer'
const rootReducer = combineReducers({
    Lista: listaReducer
})
const store = createStore(rootReducer)
export default store