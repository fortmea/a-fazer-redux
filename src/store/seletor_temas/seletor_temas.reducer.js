var initial_state;
if (localStorage.getItem('tema')) {
    initial_state = JSON.parse(localStorage.getItem('tema'));
} else {
    initial_state = { bg: "bg-dark", tc: "text-light", dc:"dropdown-menu-light" }
}
export default function seletorReducer(state = initial_state, action) {
    switch (action.type) {
        case 'SET':
            if (action.payload !== "") {
                localStorage.setItem('tema', JSON.stringify({ bg: action.bg, tc: action.tc, dc: action.dc }))
                return { bg: action.bg, tc: action.tc, dc: action.dc }
            } else {
                return state
            }
        default:
            return state
    }
}