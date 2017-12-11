import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
class Login extends Component{

  constructor(props){
		super(props);

	}

	render() {


    const { ejx } = this.props.match.params;

    let yuser = { Id:ejx,Name:'Carlos Pradenas'}
    localStorage.setItem('user', yuser);



		return (
			<div className='loading'>Loading&#8230;

        <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />
      </div>

		)
	}
}

export default Login;
