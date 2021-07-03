import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { set_tema } from "../../store/seletor_temas/seletor_temas.action"
function Seletor() {
    const dispatch = useDispatch();
    const result = useSelector(state => state.Seletor)
    const selected_bg = result['dc'];
    var sel_tema;
    var drop_text;
    if(result["bg"] === "bg-light"){
        sel_tema = <li><button className="dropdown-item" onClick={
            () => {
                dispatch(set_tema("bg-dark", "text-light", "dropdown-menu-dark"));
            }
        }>Tema escuro</button></li>;
        drop_text = "Tema claro";
    }else{
        sel_tema = <li><button className="dropdown-item" onClick={
            () => {
                dispatch(set_tema("bg-light", "text-dark", "dropdown-menu-light"));
            }
        }>Tema claro</button></li>;
        drop_text = "Tema escuro"
    }
    return <>
        <div className="btn-group">
            <button type="button" className="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                {drop_text}
            </button>
            <ul className={`dropdown-menu ${selected_bg}`}>
                {sel_tema}
            </ul>
        </div>
    </>
}
export default Seletor