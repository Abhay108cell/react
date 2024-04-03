// export default function Student({name, rollNo, classof}){
//   return(
//     <div>
//       <h1>student name is {name} , rollNo is {rollNo} and class is {classof} </h1>
//     </div>
//   )
// }
// App.js
// import { useState } from 'react'
// // import './App.css'
// // import Counter from "./Counter";
// // import "./styles.css";
// // import Title from "./Title.jsx";
// // import ProductTap from "./ProductTap";
// import Student from "./Student";

import { Component } from "react";


// function App() {
// //   const [count, setCount] = useState(0)


 
//   const [naam,setNaam]= useState("ram")
//   return(
//     <div>
//       <Student name={naam} university={"MIT"} major={"CS"}/>
//       <button onClick={()=>{setNaam("abhiram")}}>Click me</button>
//     </div>
//   )
//  }
// export default App;

// class Student extends Component {
//   constructor(){
//     super()
//     this.state={
//       data: "raman"
//     }
//   }
//   render(){
//     console.log("ram",this.state.data);
//     return(
//       <div>

//         <h1>rendering</h1> 
//         <button onClick={()=>this.setState({data:"radhika"})}>click</button>

//       </div>
//     )
//   }
// }

// update and did mount

// class Student extends Component{
//   constructor(){
//     super()
//     this.state={
//       name:"abhay"
//     }
//     console.warn("constructor called");
//   }
  
//   componentDidMount(){
//     console.warn("did mount called");
    
//   }
//   componentDidUpdate(){
//     console.warn("did update called");
    
//   }
  
//   render(){
//     // console.warn("render called");
    
//     return(
//       <div>
//         <h1>
//           componentDidMount {this.state.name}
//         </h1>
//         <button onClick={()=>{this.setState({name:"vinay"})}}>update name</button>
//       </div>
//     )
//   }
// }
// export default Student

// unmounting

// class Student extends Component {
//   componentWillUnmount(){
//     alert("i am going to disappear")
//   }
//   render(){
//     return(
//       <div>
//         {/* <h1>student component</h1> */}
//         <h1>component will unmount</h1>

//         {/* <button>toogle child component</button> */}
//       </div>
//     )
//   }
// }

export  default Student ;
 