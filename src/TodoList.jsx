import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function TodoList(){
  let [todos, setTodos] = useState([{task : "sample Task", id:uuidv4()}])
  let [newTodo, setNewTodo] = useState("")
  let addTask= (()=>{
    // console.log("adding todo in list");
    setTodos([...todos ,{task : newTodo, id:uuidv4()}])
    setNewTodo("")
  })
  let updateTask=((event)=>{
    setNewTodo(event.target.value)
  })
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
          return <li key={todo.id}>{todo.task}</li>
        })
      }
    </ul>
    </div>
  )
}