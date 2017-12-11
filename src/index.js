//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import store from './store'
//Css
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

//Axios defaults
axios.defaults.baseURL = 'http://localhost/motor/api/stage/call-center';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
