import React from 'react';

  //  React events are named using camelCase, rather than lowercase.
  //  With JSX you pass a function as the event handler, rather than a string.

/*Ex
  <button onClick={activateLasers}>
    Activate Lasers
  </button>
*/

/*
Example to prevent de default behavior of a

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
*/

//a common pattern is for an event handler to be a method on the class



class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this,"cd");
  }

  handleClick(someChar) {
    console.log("en el handle "+someChar);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;
