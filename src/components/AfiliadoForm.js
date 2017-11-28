import React, { Component } from 'react';
import { Button, Row, Container, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';

class AfiliadoForm extends Component {

    static propTypes = {
      busqueda: PropTypes.object
    }


    constructor(props) {
      super(props);
    }

    render() {

      let { busqueda }  = this.props;
      //console.log(busqueda);
      let affildt = {
            "Nombres":"",
            "Rut":"",
            "Segmento":"",
            "OficinaAsinacion":"",
            "PreAprobado":null,
            "Empresa":{"Rut":"","RazonSocial":""}
      };
      //console.log(affildt);
      console.log(busqueda.data);
      if(busqueda.data !== "undefined"){
        affildt = busqueda.data;
      }

      //console.log(affildt); value={affildt.Rut}

      return (
          <div>

                <Col md={{ size: 10, offset: 1 }}>
                  <Container>
                    <h5>Datos Afiliado</h5>
                    <hr />
                      <Row>
                        <Col xs="2">
                          <FormGroup>
                            <Label for="Rut">Rut</Label>
                            <Input type="text" name="Rut" id="Rut"  disabled />
                          </FormGroup>
                        </Col>
                        <Col xs="5">
                          <FormGroup>
                            <Label for="Nombres">Nombres</Label>
                            <Input type="text" name="Nombres" id="Nombres" disabled />
                          </FormGroup>
                        </Col>
                        <Col xs="2">
                          <FormGroup>
                            <Label for="Segmento">Segmento</Label>
                            <Input type="text" name="Segmento" id="Segmento" disabled />
                          </FormGroup>
                        </Col>
                        <Col xs="3">
                          <FormGroup>
                            <Label for="OfiAsignacion">Oficina Asignación</Label>
                            <Input type="text" name="OfiAsignacion" id="OfiAsignacion" disabled />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="3">
                          <FormGroup>
                            <Label for="RutEmpresa">Rut Empresa</Label>
                            <Input type="text" name="RutEmpresa" id="RutEmpresa" disabled />
                          </FormGroup>
                        </Col>
                        <Col xs="6">
                          <FormGroup>
                            <Label for="NombreEmpresa">Nombre Empresa</Label>
                            <Input type="text" name="NombreEmpresa" id="NombreEmpresa" disabled />
                          </FormGroup>
                        </Col>
                        <Col xs="3">
                          <FormGroup>
                            <Label for="OfiAsignacion">Monto Pre Aprobado</Label>
                            <Input type="text" name="OfiAsignacion" id="OfiAsignacion" disabled />
                          </FormGroup>
                        </Col>
                      </Row>
                  </Container>
                </Col>
          </div>

      );
    }



}

export default AfiliadoForm;
