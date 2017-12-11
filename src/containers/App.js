import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute';

import Main from './Main';
import Login from '../components/Login';
import Spinner from '../components/Spinner';

import * as searchActions from '../actions/buscadorActions';
import * as estadoActions from '../actions/estados';
import * as gestionActions from '../actions/gestion';
import * as oficinasActions from '../actions/oficinas';



const history = createBrowserHistory();


const App = ({state,  actions}) => (
  <div className="App">
      <Router history={history}>
          <div>
              <PrivateRoute exact path="/" component={Main} actions={actions} state={state} />
              <Route path="/login/:ejx" component={Login} />

          </div>
      </Router>
      {state.busquedaReducer.isLoading || state.estados.isLoading || state.gestion.isLoading ? <Spinner /> : ''}
  </div>
)

App.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object
}

const mapStateToProps = state => ({
  state: state
  /*busqueda: state.busquedaReducer,
  gestados: state.estados*/
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({...searchActions,...estadoActions, ...gestionActions, ...oficinasActions}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


//export default App;
