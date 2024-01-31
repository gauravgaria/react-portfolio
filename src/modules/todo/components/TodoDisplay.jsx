import TodoItem from "./TodoItem";

const TodoDisplay = ({items,onRemoveItem})=>{

return(<>
    {(items === undefined || items.length == 0)? <center><h4>no item to display</h4></center>:
    items.map((item)=>{
        return <TodoItem key={item.item} item={item} onRemoveItem = {onRemoveItem}/>
    })}
    </>);
}

export default TodoDisplay;