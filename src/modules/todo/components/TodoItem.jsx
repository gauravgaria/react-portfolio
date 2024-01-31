const TodoItem = ({item,onRemoveItem})=>{
    return(<>
        <center className='todo-display-container' style={{margin:"0.5%"}}>
            <div className='text-center container'>
              <div className='row'>
                <div className='col-4'>
                  {item.item}
                </div>
                <div className='col-4'>
                 {item.dueDate}
                </div>
                <div className='col-4'>
                  <button className='btn btn-danger' onClick={()=>onRemoveItem(item.item)}>Delete</button>
                </div>
              </div>
            </div>
            </center>
        </>);
    }
    
    export default TodoItem;