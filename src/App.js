import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  render() {
    return   this.getGreeting(this.props.name)
  }

  getGreeting(user) {
    if (user) {
      return (
        <h1>Hello, {user} !</h1>
      );
    }
    return <h1>Hello, Stranger.</h1>;
  }


}

/*ReactDOM.render(
  <HelloMessage name="Cesar" />,
  document.getElementById('root')
);*/

export default HelloMessage;
