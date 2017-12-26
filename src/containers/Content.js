import React, { Component } from 'react';
import AfiliadoForm from '../components/AfiliadoForm';
import GestionForm from  '../components/GestionForm';
import { Alert, Col, Container } from 'reactstrap';
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
      //const rdxState = store.getState();
      //console.log('Redux State',rdxState.gestion.data.Estado);
      

      return (
          <div className="content">
              <AfiliadoForm busqueda={busqueda}  />
              {
                typeof busqueda.showGst !== 'undefined' && busqueda.showGst == true 
                ?
                  <GestionForm onGstLoad={actions.oficinas} onGstSubmit={actions.saveGestion} />
                :
                busqueda.error ?
                  <Col md={{ size: 10, offset: 1 }}>
                    <Container>
                      <Alert color="danger">
                        El Afiliado buscado no está registrado en la base de datos.
                      </Alert>
                    </Container>
                  </Col>
                  : null
              }
          </div>
      );
    }
}

export default Content;
