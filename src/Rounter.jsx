import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default function Rounter(params) {
  return (
      <Router>
    <div>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/about">About</Link>
        {/* <Route></Route>
        <Route></Route> */}
       
    </div>
      </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <p>First page</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About page</h1>
      <p>Second page</p>
    </div>
  );
}

// import  {BrowserRouter as Router,Link,Route}from "react-router-dom"
// export default function Rounter(params) {
//   return(
//     <div>
//       <Router> 
//         <Link to="/home">Home</Link> 
//         <br />
//         <Link to="/about">About</Link> 
        // <Route path="/home">
        //   <Home />
        //   </Route>
        // <Route path="/about">
        //   <About />
        //   </Route>  
//       </Router>
//     </div>
//   )
// }

// function Home(params) {
//   return(
//     <div>
//       <h1>home page</h1>
//       <p>first page</p>
//     </div>
//   )
// }
// function About(params) {
//   return(
//     <div>
//       <h1>about page</h1>
//       <p>second page</p>
//     </div>
//   )
// }