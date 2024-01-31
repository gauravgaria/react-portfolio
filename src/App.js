import logo from './logo.svg';
import './App.css';
import TodoDisplay from './modules/todo/components/TodoDisplay';
import TodoInput from './modules/todo/components/TodoInput';
import { useState } from 'react';

function App() {
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
  return (
    <>
      <TodoInput onNewItem={addItemToList} />
      {}
      <TodoDisplay items={items} onRemoveItem = {deleteItemFromList}/>
      
    </>
  );
}

export default App;
