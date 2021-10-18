//import styles from './Form.module.css'
import { v4 as uuidv4 } from 'uuid'

const Form=({setInputtext, inputtext,todos, setTodos})=>{

    const addInput=(e)=>{
      setInputtext(e.target.value);

    };

    const addNewTodo = (e)=>{
        e.preventDefault();
        if(!inputtext){
            alert('Print todos!');
            return
        }
        setTodos([
            ...todos,
             { text: inputtext,
                completed: false,
                id: uuidv4()
            }
        ])
        setInputtext('')
    };
      return(
            <form>
                <div className='form-container'>
                    <h1 className='form-header'>Add a new task in planner</h1>
                    <div className='input-container'>
                <input type='text' className='input' placeholder='new task' value={inputtext}
               
                onChange={addInput}></input>
                <div className='button-plus'>
                    <button type = 'submit' className='add-button'
                    onClick={addNewTodo}>add</button>
                    <i className="fas fa-plus-circle"></i>
                   </div>
                   </div>
                </div>

            </form>
      )
}

export default Form;
