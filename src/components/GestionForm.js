//Modules
import React, { Component } from 'react';
import { Button, Row, Container, Col, Form, FormGroup, Label, Input, FormText, InputGroupAddon, InputGroup } from 'reactstrap';
import DatePicker from 'react-datepicker';
import Calendario from './Calendario';
import moment from 'moment';
import PropTypes from 'prop-types';

//CSS
import 'react-datepicker/dist/react-datepicker.css';


class GestionForm extends Component {

    constructor(props) {
      super(props);
      this.state = {
        startDate: moment()
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




    render() {
      return (
          <div>

                <Col md={{ size: 10, offset: 1 }}>


                  <Container>
                      <h5>Gestión</h5>  
                      <hr />

                      <Row>
                        <Col xs="4">
                          <FormGroup>
                            <Label for="Estado">Estado</Label>
                            <Input type="select" name="Estado" id="Estado">
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col xs="4">
                          <FormGroup>
                            <Label for="SubEstado">Sub Estado</Label>
                            <Input type="select" name="SubEstado" id="SubEstado">
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col xs="4">
                          <FormGroup>
                            <Label for="FechaProxGestion">Fecha Prox. Gestión</Label>

                              <DatePicker
                                customInput={<Calendario />}
                                selected={this.state.startDate}
                                onChange={this.handleChange.bind(this)}
                                locale="es-cl"
                                className="form-control"
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
                  </Container>

                </Col>
          </div>

      );
    }



}

export default GestionForm;
