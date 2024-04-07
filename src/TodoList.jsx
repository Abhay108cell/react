import { useState } from "react"


export default function TodoList(){
  let [todos, setTodos] = useState(["sample task"])
  let [newTodo, setNewTodo] = useState("")
  let addTask= (()=>{
    console.log("adding todo in list");
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
          return <li>{todo}</li>
        })
      }
    </ul>
    </div>
  )
}