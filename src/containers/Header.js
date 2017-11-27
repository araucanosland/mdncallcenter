import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Input, Col, InputGroup, InputGroupButton, Button } from 'reactstrap';
import FaSearch from 'react-icons/lib/fa/search';
import Buscador from '../components/Buscador';


class Header extends Component {

    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>

          <Navbar color="dark" dark expand="md" fixed>
            <NavbarBrand href="/">Buscador de Afiliados</NavbarBrand>
            <Col md={{ size: 3, offset: 2 }}>
              <Buscador />
            </Col>
          </Navbar>
        </div>
      );
    }



}

export default Header;
