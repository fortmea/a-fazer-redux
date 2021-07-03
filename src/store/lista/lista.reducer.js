import {default as UUID} from "uuid"; 
var initial_state;
if(localStorage.getItem('state')){
    initial_state = JSON.parse(localStorage.getItem('state'));
}else{
    initial_state = { 0: "Comece a adicionar itens na lista!" }
}
export default function listaReducer(state = initial_state, action) {
    switch (action.type) {
        case 'ADD':
            if(action.payload!==""){
            localStorage.setItem('state',  JSON.stringify({...state, [UUID.v4()]: action.payload}))
            return { ...state, [UUID.v4()]: action.payload }
        }else{
            return state
        }
        case 'REMOVE':
            var clone = Object.assign({}, state);
            delete clone[action.payload];
            localStorage.setItem('state', JSON.stringify(clone))
            return clone
        default:
            return state
    }
}