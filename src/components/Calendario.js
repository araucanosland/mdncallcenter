import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon } from 'reactstrap';
import FaCalendar from 'react-icons/lib/fa/calendar';

class Calendario extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <InputGroup>
        <Input type="text"
          className="calendario"
          id="FechaProxGestion"
          name="FechaProxGestion"
          onClick={this.props.onClick} value={this.props.value} />
        <InputGroupAddon><FaCalendar /></InputGroupAddon>
      </InputGroup>



    );
  }

}

export default Calendario;
