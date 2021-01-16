import React from "react";
import { useSelector, useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Input = (props)=>{
    const el = props;
    const dispatch = useDispatch()




    const del = () => {
        const id = props;
        dispatch({type: "DELETE", payload: id})



    }
    return(
<div>
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="form-check">
                    <input  className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                            {el.task}
                        </label>
                 </div>
                <svg type={"button"} onClick={del} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                     className="bi bi-trash" viewBox="0 0 16 16">
                    <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </li>


        </ul>
</div>
    )
}

