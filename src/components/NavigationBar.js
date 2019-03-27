import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="secondary" variant="dark" sticky="top">
                <Navbar.Brand href="#home">
                    <img
                        src="../img/logo.jpg"
                        height="30"
                        className="d-inline-block align-top"
                        alt="JazmeenDeco"
                    />
                </Navbar.Brand>
                <Nav className="mr-auto" activeKey="calendario">
                    <Nav.Link href="#calendario" eventKey="calendario">Calendario</Nav.Link>
                    <Nav.Link href="#general" eventKey="general">General</Nav.Link>
                    <Nav.Link href="#stock" eventKey="stock">Stock</Nav.Link>
                </Nav>
                    <Button variant="outline-light" className="float-right" style={{marginRight:"20px"}}>Nueva Factura</Button>
                <Form inline>
                    <FormControl type="text" placeholder="Factura No." className="mr-sm-2" />
                    <Button variant="outline-light">Buscar</Button>
                </Form>
            </Navbar>
        );
    }
}
  
export default NavigationBar;