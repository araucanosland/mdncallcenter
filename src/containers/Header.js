import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Input, Col, InputGroup, InputGroupButton, Button } from 'reactstrap';
import FaSearch from 'react-icons/lib/fa/search';
import Buscador from '../components/Buscador';
import PropTypes from 'prop-types';


class Header extends Component {

    static propTypes = {
      doSearch: PropTypes.func.isRequired
    }


    constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      };
    }

    handleSave = AfiliadoRut => {
      if (AfiliadoRut.length !== 0) {
        this.props.doSearch(AfiliadoRut)
      }
    }

    render() {
      const user = JSON.parse(localStorage.getItem("user"));

      console.log(user);
      
      return (
        <div>
          <Navbar color="info" dark expand="md" fixed="true">
            <NavbarBrand href="/">MDN Buscador de Afiliados</NavbarBrand>
            <Col md={{ size: 3, offset: 2 }}>
              <Buscador onSearch={this.handleSave} />
            </Col>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">{user.Name}</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      );
    }
}

export default Header;
