import React, { Component } from 'react';
import { Input, Col, InputGroup, InputGroupButton, Button } from 'reactstrap';
import FaSearch from 'react-icons/lib/fa/search';
import PropTypes from 'prop-types'
import { busquedaRut } from '../actions/buscadorActions';



class Buscador extends Component {

    constructor(props) {
      super(props);
    }

    static propTypes = {
      onSearch: PropTypes.func.isRequired,
      AfiliadoRut: PropTypes.string
    }

    state = {
       AfiliadoRut: this.props.AfiliadoRut || ''
    }

    handleSubmit = e => {
      if (e.which === 13) {
        const text = document.getElementById("inputSearch").value.trim()
        this.props.onSearch(text)
        this.setState({ AfiliadoRut: '' })
      }
    }

    handleChange = e => {
       this.setState({ AfiliadoRut: e.target.value })
    }


    render() {
      return (
        <div>
              <InputGroup>
                 <Input type="text"
                        placeholder="Ingrese Rut de Afiliado"
                        value={this.state.AfiliadoRut}
                        onKeyDown={this.handleSubmit}
                        onChange={this.handleChange}
                        id="inputSearch"
                  />
                 <InputGroupButton><Button color="secondary" onClick={this.handleSubmit}><FaSearch /></Button></InputGroupButton>
               </InputGroup>
        </div>
      );
    }



}

export default Buscador;
