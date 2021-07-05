import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {add, remove} from "../../store/lista/lista.action"

function Lista(){
    const [nitem, setNitem] = useState("");
    const dispatch = useDispatch();
    const result = useSelector(state => state.Lista)
    const seletor_result = useSelector(state => state.Seletor)
    return <>
    <div className="list-group top-margin">
    {Object.keys(result).map((item, i) => (
        <li className={`list-group-item border-info bg-transparent  ${seletor_result['tc']}`} key={i}>
            <h4 className="col">{ result[item] }</h4>
            <button className="btn btn-outline-danger col"  onClick={
                ()=>{
                    dispatch(remove(item));
                }
                }><i className="fa fa-remove" aria-hidden="true" ></i> Remover</button>
        </li>
    ))}
    </div>
    <div className="row justify-content-center">
        <div className="top-margin-1h col-10">
        <input type = "text" placeholder="Descrição para a atividade" className={`${seletor_result['bg']} ${seletor_result['tc']} form-control border-info`} value={nitem} onChange={(e) => setNitem(e.target.value)}></input>
    <button className="btn btn-outline-info mb-3 top-margin-1h col-12" onClick={
                ()=>{
                    dispatch(add(nitem));
                    setNitem("");
                }
                }>
        <i className="fa fa-plus" aria-hidden="true"></i> Adicionar
    </button>
    </div>
    </div>
    </>
}
export default Lista
    