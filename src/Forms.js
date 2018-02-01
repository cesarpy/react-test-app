import React from 'react';

/*
hen the React component that renders a form also controls what happens in that form on subsequent user input.
 An input form element whose value is controlled by React in this way is called a “controlled component”.
*/


//With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input.
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Like a placeHolder',
      fruit: 'coconut', //is the default in the select
      isGoing: true,
      numberOfGuests: 2
    };

//we have to bind all the handles methods
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeFruit = this.handleChangeFruit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
  //  this.setState({value: event.target.value});
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleChangeFruit(event) {
    this.setState({fruit: event.target.value});
  }

  //function of the form
  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.value} , ${this.state.fruit}`);
    alert( `Selected file - ${ this.fileInput.files[0].name }`);
    event.preventDefault();
  }

  handleInputChange(event) {
    //este metodo acepta dos elementos
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value}  disabled onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.fruit} onChange={this.handleChangeFruit}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />
        <label>
          Upload file:
          <input
            type="file"
            ref={input => {this.fileInput = input;}}
          />
        </label>
        <br />
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
