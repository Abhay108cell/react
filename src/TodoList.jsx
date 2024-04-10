import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function TodoList(){
  let [todos, setTodos] = useState([{task : "sample Task", id:uuidv4()}])
  let [newTodo, setNewTodo] = useState("")
  let addTask= (()=>{
    // console.log("adding todo in list");
    // setTodos([...todos ,{task : newTodo, id:uuidv4()}])
    setTodos((prevTodo)=>{
return [...prevTodo ,{task : newTodo, id:uuidv4()}]
    })
    setNewTodo("")
  })
  let updateTask=((event)=>{
    setNewTodo(event.target.value)
  })
  let deleteTodo=(id)=>{
    setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id !== id));
      }
      let upperCaseAll=()=>{
       setTodos((todos)=>
         todos.map((todos)=>{
           return {
             ...todos , 
             task: todos.task.toUpperCase()
           };
        })
       )
        
      }
  return(
    <div>
    <input placeholder="your new todo" value={newTodo} onChange={updateTask}/>
    <button onClick={addTask}>Add List </button>
<br />
<br />
<br />
    <h3>ToDolist</h3>
    <ul>
      {
        todos.map((todo)=>{
          return <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            <button onClick={()=>deleteTodo(todo.id)}>delete</button>
            </li>
        })
      }
    </ul>
    <button onClick={upperCaseAll}>UPPER CASE</button>
    </div>
  )
}