//Modules Dependenc3s
import React, { Component } from 'react';
import { Button, Row, Container, Col, Form, FormGroup, Label, Input, FormText, InputGroupAddon, InputGroup } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PropTypes from 'prop-types';
import serialize from 'form-serialize';
import store from '../store';

//Components
import Calendario from './Calendario';

//CSS
import 'react-datepicker/dist/react-datepicker.css';


class GestionForm extends Component {

    static propTypes = {
      onGstLoad: PropTypes.func.isRequired,
      onGstSubmit: PropTypes.func.isRequired,
      busqueda: PropTypes.object
    }

    constructor(props) {
      super(props);

      this.state = {
        hijos: [],
        datosForm: {Oficina: "", FechaProxGestion: "", Comentarios: ""}
      };

      Calendario.propTypes = {
        onClick: PropTypes.func,
        value: PropTypes.string
      };

    }

    handleChange(date) {
        this.setState({
          startDate: date
        });
    }

    componentWillMount(){
      this.props.onGstLoad();
    }

    handleSubmitForm = e => {
      e.preventDefault();
      const data = serialize(e.target, { hash: true })
      const { datosForm }  =  this.state;
      this.setState({
        datosForm: Object.assign(datosForm, data)
      })


      this.props.onGstSubmit(datosForm);

    }

    render() {

      const { oficinas } = store.getState();
      const { hijos } = this.state;

      let _oficinas = [{
        Id: "",
        Nombre: "Seleccione"
      }]
      if(typeof oficinas.data !== "undefined"){
        _oficinas = [..._oficinas, ...oficinas.data]
      }

      return (
          <div>
            <form method="post" onSubmit={this.handleSubmitForm}>
                <Col md={{ size: 10, offset: 1 }}>
                  <Container>
                      <h5>Gestión</h5>
                      <hr />
                      <Row>
                        <Col xs="6">
                          <FormGroup>
                            <Label for="Oficina">Oficina Derivación</Label>
                            <Input type="select" name="Oficina" id="Oficina" required>
                              {_oficinas.map(ofi=>{
                                return (<option key={ofi.Id} value={ofi.Id} >{ofi.Nombre}</option>)
                              })}
                            </Input>
                          </FormGroup>
                        </Col>

                        <Col xs="6">
                          <FormGroup>
                            <Label for="FechaProxGestion">¿Existe fecha de visita?</Label>

                              <DatePicker
                                customInput={<Calendario />}
                                selected={this.state.startDate}
                                onChange={this.handleChange.bind(this)}
                                locale="es-cl"
                                className="form-control"
                                dateFormat="DD-MM-YYYY"
                              />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label for="Comentarios">Texto Gestión</Label>
                            <Input type="textarea" name="Comentarios" id="Comentarios" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <Button type="submit" color="primary">Guardar</Button>
                        </Col>
                      </Row>
                  </Container>
                </Col>
              </form>
          </div>

      );
    }
}

export default GestionForm;
