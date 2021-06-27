import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {add, remove} from "../../store/lista/lista.action"
import {default as UUID} from "uuid";  
function Lista(){
    const [nitem, setNitem] = useState("");
    const dispatch = useDispatch();
    const result = useSelector(state => state.Lista)
    return <>
    <div className="list-group top-margin">
    {Object.keys(result).map((item, i) => (
        <li className="list-group-item border-info bg-transparent text-light" key={i}>
            <p className="col"><h4>{ result[item] }</h4></p>
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
        <input type = "text" placeholder="Texto para o próximo item da lista" className="form-control " value={nitem} onChange={(e) => setNitem(e.target.value)}></input>
    <button className="btn btn-outline-info mb-3 top-margin-1h col-12" onClick={
                ()=>{
                    dispatch(add(nitem, UUID.v4()));
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
    