import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Toggle from './Events';
import Clock from './Lifecycle';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App name="Cesar" />, document.getElementById('root'));
//ReactDOM.render(<Clock />, document.getElementById('root'));

ReactDOM.render(<Toggle />, document.getElementById('root'));
registerServiceWorker();
