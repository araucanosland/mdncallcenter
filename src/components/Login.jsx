import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import store from '../store'
//import * as AccesoActions from '../actions/acceso'

class Login extends Component{

  constructor(props){
		super(props);

		this.state = {
			usuario: '',
			clave: '',
			enviado: false
		};
		
		

		localStorage.removeItem("user")
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	componentWillUpdate(){
		const { acceso } = store.getState();

		if (acceso.isLoading === false && acceso.error === false){
			
			let yuser = {Rut:acceso.data.Rut, Name: acceso.data.Usuario }
			localStorage.setItem('user', JSON.stringify(yuser));
			window.location.href="/";  
			
		}

	}

	handleSubmit(e) {
        e.preventDefault();

		let usr_object =document.querySelector("#usuario");
		let pss_object = document.querySelector("#clave");
		
		this.setState({ enviado: true, 
						usuario: usr_object.value, 
						clave: pss_object.value 
					});
		
		const accessdata={
			cuenta: usr_object.value,
			clave: pss_object.value
		}	
		//AccesoActions.handleLogin(accessdata);
		
		this.props.onLogin(accessdata);
		
    }




	render() {
		const { acceso } = store.getState();	
    

		return (

			<div>

	<Container>
        <Row>
			<Col sm="12" md={{ size: 8, offset: 2 }}>
				<h3>Acceso, MDN Call Center</h3>
				<Jumbotron>
					<Form name="form" onSubmit={this.handleSubmit}>
						<FormGroup row>
						<Label sm={2} for="usuario">Rut</Label>
						<Col sm={10}>
							<Input type="text" name="usuario" id="usuario" placeholder="111111111-1" />
						</Col>
						</FormGroup>
						<FormGroup row>
						<Label sm={2} for="clave">Contraseña</Label>
						<Col sm={10}>
							<Input type="password" name="clave" id="clave" placeholder="**************" />
						</Col>
						</FormGroup>

						<FormGroup check row>
						<Col sm={{ size: 10, offset: 2 }}>
							<Button color="primary">Acceder</Button>
						</Col>
						</FormGroup>
					</Form>


					{
						(acceso.isLoading === false && acceso.error === true) ?

					

					<Col md={{ size: 10, offset: 1 }}>
                    <Container>
                      <Alert color="danger">
                        Error en credenciales.
                      </Alert>
                    </Container>
                     </Col>
					:null
					}
				</Jumbotron>

				

			</Col>
		</Row>
	</Container>
      		</div>

		)
	}
}

export default Login;
