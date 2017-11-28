import React, { Component } from 'react';
import AfiliadoForm from '../components/AfiliadoForm';
import GestionForm from  '../components/GestionForm';
import PropTypes from 'prop-types';

class Content extends Component {

    static propTypes = {
      actions: PropTypes.object.isRequired,
      busqueda: PropTypes.object
    }


    constructor(props) {
      super(props);
    }

    render() {

      let { busqueda, actions } = this.props;

      return (
          <div className="content">

              <AfiliadoForm busqueda={busqueda}  />

              <GestionForm />
          </div>
      );
    }



}

export default Content;
