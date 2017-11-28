import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

const createAppStore = compose(
	applyMiddleware(thunkMiddleware)
)(createStore);

const store = createAppStore(reducer);
//const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
