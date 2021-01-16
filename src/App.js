import React  from "react";
import {useSelector, useDispatch} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from "./component/InputComponent";
import './App.css';

export  default function App() {
    const state = useSelector((state)=>state)
    const dispatch = useDispatch()



    const enter = () =>{
        document.getElementById("form_button2").removeAttribute('disabled')
    }

    const add=(ev) =>{
        ev.preventDefault()
         document.getElementById("form_button2").setAttribute('disabled',"disable")
        const task = ev.target[0].value
        console.log(task)

        if(ev.target[0].value.length > 1){
            dispatch({type: "ADD", payload: {id: Math.random(), task}})
            document.getElementById("input_component").value = "";
        }
    }


  return (
          <div className={"cont"}>

                <form id={"form"} onSubmit={add}>
                    <input  className="form-control" type="text" onInput={enter} id={"input_component"} placeholder={"New Task"}/>
                    <button  class="btn btn-primary"disabled={true}id ={"form_button2"}>Add</button>
                </form>
               {
                  state.map(el =>
                      <Input  key ={el.id} task ={el.task} id = {el.id} state ={state}  />)
               }

          </div>
        )
    }

