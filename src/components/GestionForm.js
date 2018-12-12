//Modules Dependenc3s
import React, { Component } from 'react';
import { Button, Row, Container, Col, Form, FormGroup, Label, Input, FormText, InputGroupAddon, InputGroup, Alert } from 'reactstrap';
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
      const usuarioLogeado = JSON.parse(localStorage.getItem("user"))
      const busquedaState = store.getState().busquedaReducer;


      this.state = {
        hijos: [],
        datosForm: {
                      Oficina: "",
                      FechaProxGestion: "",
                      Comentarios: "",
                      RutEjecutivo: usuarioLogeado.Rut,
                      Asignacion: busquedaState.data.Asignacion,
                      RutAfiliado: busquedaState.data.Afiliado.ClaveRut,
                      HorarioPreferencia: ""
        },
        otrVisible: false,
        frmVisible: true,
        respuestaGestion: {}
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
        datosForm: Object.assign(datosForm, data),
        frmVisible: false
      })
      this.props.onGstSubmit(datosForm);

    }

    handleContactChange = e => {

      if(e.target.value === 'OTR')
      {
        this.setState({
          otrVisible: true
        })
        document.getElementById('NuevoFono').setAttribute('required','required')
      }
      else
      {
        this.setState({
          otrVisible: false
        })
        document.getElementById('NuevoFono').removeAttribute('required')
      }

    }

    render() {

      const { oficinas, gestion } = store.getState();
      const { hijos, otrVisible, frmVisible } = this.state;
      const busquedaState = store.getState().busquedaReducer;
      let _oficinas = [{
        Id: "",
        Nombre: "Seleccione"
      }]
      if(typeof oficinas.data !== "undefined"){
        _oficinas = [..._oficinas, ...oficinas.data]
      }

      console.log({busquedaState})

      return (
          <div>
            <form method="post" onSubmit={this.handleSubmitForm} className={frmVisible?'':'hidden'}>
                <Col md={{ size: 10, offset: 1 }}>
                  <Container>
                      <h5>Historial de Gestión del Periodo</h5>
                      <hr />
                      <Row className="contenedor-gestiones">
                        <Col xs="12">
                        {
                          busquedaState.data.Gestiones.map(gst =>{
                              return (<Alert key={gst.FechaAccion} color="secondary">
                                <strong>El: {new Date(gst.FechaAccion).toLocaleDateString()},por: {gst.RutEjecutivo}, {gst.IdOficina == '555' ? 'Call Center': 'La Araucana'}</strong>
                                <p className="quote">{gst.Descripcion}</p>
                                <small>{ gst.FechaCompromete !=null ? 'Próxima Gestión: ' + new Date(gst.FechaCompromete).toLocaleDateString() : ''  }</small>
                              </Alert>)
                          })
                        }
                          
 
                        </Col>
                      </Row>



                      <h5>Contactabilidad</h5>
                      <hr />
                      <Row>
                      <Col xs="6">
                          <FormGroup>
                            <Label for="FonoContact">¿En que fono lo contacté?</Label>
                            <Input type="select" name="FonoContact" id="FonoContact" onChange={this.handleContactChange} required>
                                <option value="">Seleccione</option>
                              {busquedaState.data.Fonos.map(fono=>{
                                  return (<option key={fono.ValorDato} value={fono.ValorDato} >{fono.ValorDato}</option>)
                                })}
                                <option value="OTR">Otro</option>
                            </Input>
                          </FormGroup>
                        </Col>

                        <Col xs="6" className={!otrVisible?'hidden':''}>
                          <FormGroup>
                            <Label for="NuevoFono">¿Cual es el numero de contacto?</Label>
                            <InputGroup>
                              <InputGroupAddon>+56</InputGroupAddon>
                              <Input type="number" name="NuevoFono" id="NuevoFono" />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <h5>Gestión</h5>
                      <hr />
                      <Row>
                        <Col xs="4">
                          <FormGroup>
                            <Label for="Oficina">Oficina Derivación</Label>
                            <Input type="select" name="Oficina" id="Oficina" required>
                              {_oficinas.map(ofi=>{
                                return (<option key={ofi.Id} value={ofi.Id} >{ofi.Nombre}</option>)
                              })}
                            </Input>
                          </FormGroup>
                        </Col>

                        <Col xs="4">
                          <FormGroup>
                            <Label for="FechaProxGestion">Fecha de contacto sucursal</Label>

                              <DatePicker
                                customInput={<Calendario />}
                                selected={this.state.startDate}
                                onChange={this.handleChange.bind(this)}
                                locale="es-cl"
                                className="form-control"
                                dateFormat="DD-MM-YYYY"
                                autoComplete="off"
                              />
                          </FormGroup>
                        </Col>
                        <Col xs="4">
                          <FormGroup>
                            <Label for="Oficina">Horario de contacto sucursal</Label>
                            <Input type="select" name="HorarioPreferencia" id="HorarioPreferencia" required>
                              <option value="">Seleccione</option>
                              <optgroup label="Generales">
                                  <option>Durante la Mañana</option>
                                  <option>Durante la Tarde</option>
                                  <option>Cualquier Horario</option>
                              </optgroup>
                              <optgroup label="Especificas">
                                  <option>09:00-11:00</option>
                                  <option>11:00-13:00</option>
                                  <option>13:00-15:00</option>
                                  <option>15:00-17:00</option>
                                  <option>17:00-19:00</option>
                              </optgroup>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label for="Comentarios">Observación</Label>
                            <Input type="textarea" name="Comentarios" id="Comentarios" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <Button type="submit" color="primary">Derivar</Button>
                        </Col>
                      </Row>
                      <br />
                      <br/>
                  </Container>
                </Col>
              </form>
              <div className={frmVisible && !gestion.isLoading? 'hidden':''}>
                <Col md={{ size: 10, offset: 1 }}>
                  <Container>
                    <Alert color={gestion.isLoading==false && gestion.error==true ? "warning":"success"}>
                      {
                        gestion.isLoading == false && gestion.error ? "Error al derivar: " + gestion.data.response.data.ExceptionMessage : "Derivación realizada con éxito"
                      }
                    </Alert>
                  </Container>
                </Col>
              </div>
          </div>

      );
    }
}

export default GestionForm;
