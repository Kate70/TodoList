
import './App.css';
import { useState,useEffect } from "react";

import Form from './components/Form';
import List from './components/List';


function App() {
  const[inputtext, setInputtext]=useState('');
  const[todos, setTodos]=useState([]);

  useEffect(()=>{
    const todoStore=JSON.parse(localStorage.getItem('todoStore'));
    if(todoStore) setTodos(todoStore)
    },[])

  useEffect(() => {
    localStorage.setItem('todoStore', JSON.stringify(todos))
    
  },[todos] );

  
  return (
    <div className="App">   
      
      <Form inputtext={inputtext} setInputtext={setInputtext} todos={todos} setTodos={setTodos}/>
      <List todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
