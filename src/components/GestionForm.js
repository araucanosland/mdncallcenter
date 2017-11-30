//Modules Dependenc3s
import React, { Component } from 'react';
import { Button, Row, Container, Col, Form, FormGroup, Label, Input, FormText, InputGroupAddon, InputGroup } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PropTypes from 'prop-types';
import serialize from 'form-serialize';


//Components
import Calendario from './Calendario';

//CSS
import 'react-datepicker/dist/react-datepicker.css';


class GestionForm extends Component {

    static propTypes = {
      onGstLoad: PropTypes.func.isRequired,
      onGstSubmit: PropTypes.func.isRequired,
      gestados: PropTypes.object,
      busqueda: PropTypes.object
    }

    constructor(props) {
      super(props);

      this.state = {
        startDate: moment(),
        hijos: [],
        datosForm: {Estado: "", SubEstado: "", FechaProxGestion: "", Comentarios: ""}
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

    handleEstadoChange = e => {
      const { gestados } = this.props;
      let padre = e.target;
      var hijo = document.getElementById('SubEstado');


      if(padre.value == 0)
      {
          this.setState({ hijos: [] })
      }
      else
      {
        gestados.data.map(gs=>{
          if(gs.EstadoId == padre.options[padre.selectedIndex].value)
          {
            let estas = [{EstadoId:"", Nombre:"Seleccione"}, ...gs.Hijos]
            this.setState({ hijos: estas })
          }
        })
      }
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

      const { gestados } = this.props;
      const { hijos } = this.state;

      let estados = [{
        EstadoId: "",
        Nombre: "Seleccione"
      }]
      if(typeof gestados.data !== "undefined"){
        estados = [...estados, ...gestados.data]
      }

      return (
          <div>
            <form method="post" onSubmit={this.handleSubmitForm}>
                <Col md={{ size: 10, offset: 1 }}>
                  <Container>
                      <h5>Gestión</h5>
                      <hr />
                      <Row>
                        <Col xs="4">
                          <FormGroup>
                            <Label for="Estado">Estado</Label>
                            <Input type="select" name="Estado" id="Estado" onChange={this.handleEstadoChange} required>
                              {estados.map(esta=>{
                                return (<option key={esta.EstadoId} value={esta.EstadoId} >{esta.Nombre}</option>)
                              })}
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col xs="4">
                          <FormGroup>
                            <Label for="SubEstado">Sub Estado</Label>
                            <Input type="select" name="SubEstado" id="SubEstado" required>
                              {hijos.map(hijo=>{
                                return (<option key={hijo.EstadoId} value={hijo.EstadoId} >{hijo.Nombre}</option>)
                              })}
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
                                dateFormat="DD-MM-YYYY"
                              />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label for="Comentarios">Texto Gestión</Label>
                            <Input type="textarea" name="Comentarios" id="Comentarios" required />
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
