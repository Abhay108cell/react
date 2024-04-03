import { useState } from 'react'
// import './App.css'
// import Counter from "./Counter";
// import "./styles.css";
// import Title from "./Title.jsx";
// import ProductTap from "./ProductTap";
// import Student from "./Student";


function App() {
  return(
    <div>
      <h1>Hello World!</h1>
      {/* <Counter /> */}
      <HOCred cmp={Counter} />
      <HOCgreen cmp={Counter} />
      <HOCyellow cmp={Counter} />
    </div>
  )
}

function HOCred(props){
  return <h1 style={{backgroundColor : "red", width: 100}}><props.cmp /></h1>;
    
}
function HOCgreen(props){
  return <h1 style={{backgroundColor : "green", width: 100}}><props.cmp /></h1>;
    
}
function HOCyellow(props){
  return <h1 style={{backgroundColor : "yellow", width: 100}}><props.cmp /></h1>;
    
}

function Counter(params) {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>update</button>
    </div>
  )
  
}

export default App;

