import React, { Component } from 'react';
import { Input, Col, InputGroup, InputGroupButton, Button } from 'reactstrap';
import FaSearch from 'react-icons/lib/fa/search';
class Buscador extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
              <InputGroup>
                 <Input type="text" name="afirut" id="afirut" placeholder="Ingrese Rut de Afiliado" />
                 <InputGroupButton><Button color="secondary"><FaSearch /></Button></InputGroupButton>
               </InputGroup>
        </div>
      );
    }



}

export default Buscador;
