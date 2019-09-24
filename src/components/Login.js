import React, { Component } from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import logo from '../img/logo.jpg';
import axios from 'axios';
import Cookie from "js-cookie";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                username: '',
                password: ''
            },
            response: ''
        }
    }

    handleOnChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            ...this.state,
            userData: {
                ...this.state.userData,
                [name]: value
            }
        });
    }

    setResponseText = text => {
        this.setState({
            ...this.state,
            response: text
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const authEndpoint = `${process.env.REACT_APP_API_ENDPOINT}auth/token`;
        const {username, password} = this.state.userData;
        this.setResponseText('Conectando...')

        axios.post(authEndpoint, {}, {
            auth: {
              username: username,
              password: password
            }
        })
        .then(res => {
            this.setResponseText('Ok!')
            Cookie.set("auth-token", res.data.access_token);
            Cookie.set("user-name", username);
            // Cookie.set("user-role", username);
            this.props.history.push('/calendar');
        })
        .catch(error => {
            this.setResponseText('Usuario o contraseña incorrectos')
        });
    }

    render() {
        return (
            <div className="login">
                <Card style={{ width: '18rem', margin: 'auto', background: 'burlywood' }}>
                    <Card.Img variant="top" src={logo} style={{ mixBlendMode: 'screen' }} />
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Usuario" 
                                    value={this.state.userData.username} 
                                    onChange={this.handleOnChange}
                                    name="username"
                                    autoComplete="username"
                                    />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Contraseña" 
                                    value={this.state.userData.password} 
                                    onChange={this.handleOnChange}
                                    name="password"
                                    autoComplete="current-password"
                                    />
                            </Form.Group>
                            <Button variant="info" type="submit" style={{width: "100%"}}>
                                Enviar
                            </Button>
                            <Card.Text className="mt-1" style={{fontSize: "14px"}}>{this.state.response}</Card.Text>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Login;