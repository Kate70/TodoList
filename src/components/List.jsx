import Item from "./Item";


const List=({todos={todos}, setTodos={setTodos}})=>{
      return(
            <div className='list-container'>
                <ul className ='todo-list'>
                      {todos.map((todo)=>(
                                  <Item text={todo.text} todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
                            ))}
            </ul>
                
            </div>
      )
}

export default List;
