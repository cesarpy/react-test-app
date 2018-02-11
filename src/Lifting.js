import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

/*
class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <label>Enter temperature in Celsius:</label>
        <input  value={temperature}  onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}*/


//all together
/*
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <label>Enter temperature in {scaleNames[scale]}:</label>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}
*/
/*
In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it.
 This is called “lifting state up”. We will remove the local state from the TemperatureInput and move it into the Calculator instead.
*/


class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    //this.state = {temperature: ''};
  }

  handleChange(e) {
  // Before: this.setState({temperature: e.target.value});
  //el componente padre pasa la funcion como parametr
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    // Before: const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <label>Enter temperature in {scaleNames[scale]}:</label>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}



class Calculator extends React.Component {

  constructor(props){
    super(props);
    this.handleCelsiusChange =   this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange =   this.handleFahrenheitChange.bind(this);
    this.state = {
      temperature: '',
      scale : ''
    };
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
  const scale = this.state.scale;
   const temperature = this.state.temperature;
   const celsius = (scale === 'f') ? tryConvert(temperature, toCelsius) : temperature;
   const fahrenheit = (scale === 'c') ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />

        <br/>

        <BoilingVerdict celsius={parseFloat(celsius)} />

      </div>
    );
  }
}

 //Utils
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}




export default Calculator;
