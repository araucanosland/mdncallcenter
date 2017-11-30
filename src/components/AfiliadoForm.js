import React, { Component } from 'react';
import { Button, Row, Container, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
import isEmptyObject from 'is-empty-object';
import numeral from 'numeral';
import rut from 'fi-rut';

class AfiliadoForm extends Component {

    static propTypes = {
      busqueda: PropTypes.object
    }

    constructor(props) {
      super(props);


      // load a locale
      numeral.register('locale', 'cl', {
          delimiters: {
              thousands: '.',
              decimal: ','
          },
          abbreviations: {
              thousand: 'k',
              million: 'm',
              billion: 'b',
              trillion: 't'
          },
          ordinal : function (number) {
              return number === 1 ? 'er' : 'ème';
          },
          currency: {
              symbol: '$'
          }
      });

      // switch between locales
      numeral.locale('cl');


    }

    render() {

      const { busqueda }  = this.props;
      let affildt = {
            "Nombres":"",
            "Rut":"",
            "Segmento":"",
            "OficinaAsinacion":"",
            "PreAprobado":"",
            "Empresa":{"Rut":"","RazonSocial":""}
      };

      if(typeof busqueda.data !== "undefined"){
        if(!isEmptyObject(busqueda.data)){
          affildt = busqueda.data;
        }
      }

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
                            <Input type="text" name="Rut" id="Rut" value={rut.format(affildt.Rut)}  disabled />
                          </FormGroup>
                        </Col>
                        <Col xs="5">
                          <FormGroup>
                            <Label for="Nombres">Nombres</Label>
                            <Input type="text" name="Nombres" id="Nombres" value={affildt.Nombres} disabled />
                          </FormGroup>
                        </Col>
                        <Col xs="2">
                          <FormGroup>
                            <Label for="Segmento">Segmento</Label>
                            <Input type="text" name="Segmento" id="Segmento" value={affildt.Segmento} disabled />
                          </FormGroup>
                        </Col>
                        <Col xs="3">
                          <FormGroup>
                            <Label for="OfiAsignacion">Oficina Asignación</Label>
                            <Input type="text" name="OfiAsignacion" id="OfiAsignacion" value={affildt.OficinaAsinacion} disabled />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="3">
                          <FormGroup>
                            <Label for="RutEmpresa">Rut Empresa</Label>
                            <Input type="text" name="RutEmpresa" id="RutEmpresa" value={rut.format(affildt.Empresa.Rut)} disabled />
                          </FormGroup>
                        </Col>
                        <Col xs="6">
                          <FormGroup>
                            <Label for="NombreEmpresa">Nombre Empresa</Label>
                            <Input type="text" name="NombreEmpresa" id="NombreEmpresa" value={affildt.Empresa.RazonSocial} disabled />
                          </FormGroup>
                        </Col>
                        <Col xs="3">
                          <FormGroup>
                            <Label for="MontoPreAprobado">Monto Pre Aprobado</Label>
                            <Input type="text" name="MontoPreAprobado" id="MontoPreAprobado" value={numeral(affildt.PreAprobado).format('$ 0,0[.]00')} disabled />
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
