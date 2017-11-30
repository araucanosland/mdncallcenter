import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';
import Spinner from '../components/Spinner';

import * as searchActions from '../actions/buscadorActions';
import * as estadoActions from '../actions/estados';
import * as gestionActions from '../actions/gestion';

const App = ({state,  actions}) => (
  <div className="App">
      <Header doSearch={actions.busquedaRut} />
      <Content busqueda={state.busquedaReducer} gestados={state.estados} actions={actions} />
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
    actions: bindActionCreators({...searchActions,...estadoActions, ...gestionActions}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


//export default App;
