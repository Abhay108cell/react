//  import { Component } from "react";


//  class LifeCycle extends Component {
//   constructor() {
//     super();
//     this.state={
//       data:"abhay"
//     }
// console.log("radhe shyam");
//     }
//     // componentDidMount(){
//     //   console.log("comp did");
//     // }
//   render(){
//     // console.log("radha raman ");
//     return(
//       <div>
//         <h1>hare ram{this.state.data}</h1>
//       </div>
//     )
//   }
//  }

//  export default  LifeCycle;

// 

import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Robo',
    };
    console.log('Constructor called');
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    console.log('Render method called');
    return <h1>Hello, I am {this.state.name}</h1>;
  }
}

export default LifeCycle;
