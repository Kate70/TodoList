import { useState } from "react";
import { AiFillCheckCircle,AiFillEdit,AiFillDelete } from "react-icons/ai"

const Item=({text,todos,todo, setTodos})=>{
      const [edit, setEdit]=useState(null);
      const[value, setValue]=useState('1')

      const removeItem=(id)=>{
            setTodos(todos.filter(item=>item.id!==todo.id))

      }

      const madeCompleted=()=>{
            setTodos(todos.map((item)=>{
                  if(item.id==todo.id){
                        return{
                              ...item, completed:!item.completed
                        }
                  }
                  return item
            }))
      }

      function editTodo(id,text){
            setEdit(true)
      }

      function saveTodo(id){
            let newTodo=[...todos].map((item)=>{
                  if(item.id==id){
                        item.text=value;
                  }
                  return item
            })
            setTodos(newTodo);
            setEdit(null);
      }

      if(edit){
            return(
                  <li>
                  <input type='text' className='edit-box' value={value}
                  onChange={(e)=>setValue(e.target.value)}/>
                  <button className='save-button' onClick={()=>saveTodo(todo.id)}>save</button>
                  </li>
            )
      }else{
      return(
            <div className='item-container'>
                  
                  <div className='text'>
                <div className={`item-decoration' ${todo.completed? 'completed':''}`}>{text}</div></div>
                 <div className='buttons'>
               <span  onClick={madeCompleted}><AiFillCheckCircle /></span>
               <span  onClick={()=>editTodo(todo.id, todo.text)}><AiFillEdit/></span>
               <span  onClick={removeItem}><AiFillDelete/></span>
                
              
               
                </div>
                
            </div>
      )}
}

export default Item;
