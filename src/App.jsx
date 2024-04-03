// import React, { Component, useState , useEffect } from 'react'
// import './App.css'
// import Counter from "./Counter";
// import "./styles.css";
// import Title from "./Title.jsx";
// import ProductTap from "./ProductTap";
// import Student from "./Student";
// import Rounter from "./Rounter";
import LifeCycle from './LifeCycle';


// function App(params) { 
//   // const [name, setName] = useState("vinay")

//  return(
//   <div>

//     {/* <Rounter/> */}
    // {/* <LifeCycle/> */}
//     {/* <Student name="abhay" rollNo={1023} classof={"5th"}></Student> */}
//    {/* <Student name={name}/> */}
//    <Student/>
//    {/* <button onClick={()=>setName("krishna")}>click me</button> */}
//   </div>
//  )
// }

// export default App;

// import { Component } from "react";

// unmounting


// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       show:true
//     }
//   }
//     render(){
//       return(
//         <div>
          
//           {
// this.state.show ? <Student/> : <h1>child component</h1>
//           }

//           <button onClick={()=>{this.setState({show:!this.state.show})}}>toggle child component</button>
//         </div>

//       )
//     }
// }

// export default App;

// useEffect

//  function App(){
//   const [count, setCount] = useState(0);

//   useEffect(()=>{
//     console.log("I am mounted");
//   })

//   return(
//     <div>
//       <h1>useEffect demo :{count}</h1>
//       <button onClick={()=>{setCount(count+1)}}>click me</button>
//     </div>
//   )
// }

// export default App


// routing

// App.js

// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes> {/* Use Routes instead of Route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// import Home from "./Home"

// export default function App(){
//   // const [count, setCount]=useState(0)
//   return(
//     <div>
//       {/* <Home name="Abhay" classis="5th" school="IIMT"/> */}
//       {/* <h1>{count}</h1> */}
//         <LifeCycle/> 

//       {/* <button onClick={()=>{setCount(count+1)}}>increase</button> */}
//     </div>
//   )
// }

