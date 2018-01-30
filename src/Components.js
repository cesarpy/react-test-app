import React from 'react';



//Elements are the smallest building blocks of React apps.
//An element describes what you want to see on the screen EX:
//const element = <h1>Hello, world</h1>;

//Elements are what components are “made of”


/*
This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data
and returns a React element. We call such components “functional” because they are literally JavaScript functions.
*/

//functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}


//ES6 class
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
