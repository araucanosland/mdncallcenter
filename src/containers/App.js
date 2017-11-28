import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';

import * as searchActions from '../actions/buscadorActions';

const App = ({busqueda, actions}) => (
  <div className="App">
      <Header doSearch={actions.busquedaRut} />
      <Content busqueda={busqueda} actions={actions} />
  </div>
)

App.propTypes = {
  actions: PropTypes.object.isRequired,
  busqueda: PropTypes.object
}

const mapStateToProps = state => ({
  busqueda: state.busquedaReducer
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(searchActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


//export default App;
