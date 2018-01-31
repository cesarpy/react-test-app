import React from 'react';
//State is similar to props, but it is private and fully controlled by the component.
//Local state is exactly that: a feature available only to classes. not un functions
/*function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}*/

class Clock extends React.Component{

  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  //These methods are called “lifecycle hooks”.
  //function whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.
  componentDidMount() {
    //runs after the component output has been rendered to the DOM.
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

//function henever the DOM produced by the Clock is removed. This is called “unmounting” in React.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

}

/***


    When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.

    React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock’s render output.

    When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle hook. Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.

    Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

    If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle hook so the timer is stopped.

***/



//state is reserved

//Do Not Modify State Directly - Instead, use setState():

/* React may batch multiple setState() calls into a single update for performance.
you should not rely on their values for calculating the next state

To fix it, use a  form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));



*/
export default Clock;
