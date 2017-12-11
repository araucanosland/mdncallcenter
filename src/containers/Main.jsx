import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';

class Main extends Component {


    constructor(props) {
      super(props);
    }



    render() {
      const { actions, state } = this.props;
      return (
        <div>
          <Header doSearch={actions.busquedaRut} />
          <Content busqueda={state.busquedaReducer} actions={actions} />
        </div>
      );
    }
}

export default Main;
