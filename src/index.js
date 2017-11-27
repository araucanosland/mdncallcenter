import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />,
  document.getElementById('root'));
registerServiceWorker();
