import React, { Component } from 'react';
import AfiliadoForm from '../components/AfiliadoForm';
import GestionForm from  '../components/GestionForm';
import PropTypes from 'prop-types';
import store from '../store'

class Content extends Component {

    static propTypes = {
      actions: PropTypes.object.isRequired,
      busqueda: PropTypes.object
    }


    constructor(props) {
      super(props);
    }

    render() {
      const { busqueda, actions } = this.props;

      return (
          <div className="content">
              <AfiliadoForm busqueda={busqueda}  />
              {
                typeof busqueda.showGst !== 'undefined' && busqueda.showGst == true
                ? <GestionForm onGstLoad={actions.oficinas} onGstSubmit={actions.saveGestion} />
                : null
              }
          </div>
      );
    }
}

export default Content;
