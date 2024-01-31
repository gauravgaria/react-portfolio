import { useRef, useState } from "react";

const TodoInput = ({onNewItem})=>{
    

    const itemName = useRef();
    const dueDateElement = useRef();


    const handleOnClick = () =>{
      const item = itemName.current.value;
      const dueDate = dueDateElement.current.value;
        onNewItem(item,dueDate);
        itemName.current.value = "";
        dueDateElement.current.value ="";
    }


    return(<>
        <center className='todo-container'>
            <h2>Todo App</h2>
            <div className='text-center container'>
              <div className='row'>
                <div className='col-4'>
                  <input type='text' placeholder='Enter todo item' ref={itemName}/>
                </div>
                <div className='col-4'>
                  <input type='date' ref={dueDateElement}/>
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