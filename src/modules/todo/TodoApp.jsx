import { useState } from "react";
import TodoDisplay from "./components/TodoDisplay";
import TodoInput from "./components/TodoInput";

const TodoApp = ()=>{
    const[items, setItems] = useState([]);

    const addItemToList = (x,y)=>{
        const todoItem = [
          ...items,
          {item : x,
          dueDate: y}
        ]
        setItems(todoItem);
    }
    
    const deleteItemFromList = (deleteItem)=>{
      const todoItem = items.filter(items => items.item !== deleteItem);
      setItems(todoItem) ;
    }
    return(<>
        <TodoInput onNewItem={addItemToList} />
      
      <TodoDisplay items={items} onRemoveItem = {deleteItemFromList}/>
    </>)
}

export default TodoApp;