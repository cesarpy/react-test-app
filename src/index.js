import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Toggle from './Events';
import Clock from './Lifecycle';
import registerServiceWorker from './registerServiceWorker';
import Userform from './Forms'
import Claculator from './Lifting'

//ReactDOM.render(<App name="Cesar" />, document.getElementById('root'));
//ReactDOM.render(<Clock />, document.getElementById('root'));
//ReactDOM.render(<Toggle />, document.getElementById('root'));
//ReactDOM.render(<Userform />, document.getElementById('root'));
ReactDOM.render(<Claculator />, document.getElementById('root'));
registerServiceWorker();
