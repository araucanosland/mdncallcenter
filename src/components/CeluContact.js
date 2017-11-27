import React, { Component } from 'react';
import { Button, Row, Container, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CeluContact extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
          <div>
                <select id="slCelular" name="slCelular">
                  <option>Hola mudno</option>
                </select>
          </div>

      );
    }



}

export default CeluContact;
