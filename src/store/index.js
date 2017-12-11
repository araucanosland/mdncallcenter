//Dependencies
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducers'
import thunkMiddleware from 'redux-thunk';

//Redux Store
const createAppStore = compose(
	applyMiddleware(thunkMiddleware)
)(createStore);

const store = createAppStore(reducer);
//const store = createStore(reducer)

export default store;
