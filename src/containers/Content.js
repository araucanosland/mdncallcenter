import React, { Component } from 'react';
import AfiliadoForm from '../components/AfiliadoForm';
import GestionForm from  '../components/GestionForm';
class Content extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
          <div className="content">
              <AfiliadoForm />
              
              <GestionForm />
          </div>
      );
    }



}

export default Content;
