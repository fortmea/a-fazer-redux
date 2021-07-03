import {createStore, combineReducers} from 'redux'
import listaReducer from './lista/lista.reducer'
import seletorReducer from './seletor_temas/seletor_temas.reducer'
const rootReducer = combineReducers({
    Lista: listaReducer,
    Seletor: seletorReducer
})
const store = createStore(rootReducer)
export default store