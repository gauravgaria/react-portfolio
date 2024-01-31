import { useState } from "react";

const TodoInput = ({onNewItem})=>{
    
    const[item,setItem] = useState("");

    const[dueDate,setDueDate] = useState("");

    const getItemValue = (event)=>{
        setItem(event.target.value);
    }

    const getDateValue = (event)=>{
        setDueDate(event.target.value);
    }

    const handleOnClick = () =>{
        onNewItem(item,dueDate);
        setItem("");
        setDueDate("");
    }


    return(<>
        <center className='todo-container'>
            <h2>Todo App</h2>
            <div className='text-center container'>
              <div className='row'>
                <div className='col-4'>
                  <input type='text' placeholder='Enter todo item' value={item} onChange={getItemValue}/>
                </div>
                <div className='col-4'>
                  <input type='date' value={dueDate} onChange={getDateValue}/>
                </div>
                <div className='col-4'>
                  <button className='btn btn-success' onClick={handleOnClick}>Add item</button>
                </div>
              </div>
            </div>
            </center>
        </>);
    }
    
    export default TodoInput;