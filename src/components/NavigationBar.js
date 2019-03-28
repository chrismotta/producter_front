import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from '../img/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavigationBar extends Component {
    
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top" style={{
                backgroundImage: `url(${logo})`,
                backgroundBlendMode: 'lighten',
                backgroundSize: "85px",
                backgroundPosition: "10px 3px",
                backgroundRepeat: "no-repeat"
            }}>
                <Navbar.Brand href="#home" style={{width:"70px"}}>
                </Navbar.Brand>
                <Nav className="mr-auto" activeKey="listado">
                    <Nav.Link href="#listado" eventKey="listado">
                    <FontAwesomeIcon icon="list-alt" /> Listado</Nav.Link>
                    <Nav.Link href="#stock" eventKey="stock">
                        <FontAwesomeIcon icon="cubes" /> Stock</Nav.Link>
                    <Nav.Link href="#stock" eventKey="imprimir">
                        <FontAwesomeIcon icon="print" /> Imprimir</Nav.Link>
                </Nav>
                    <Button variant="outline-info" className="float-right" style={{marginRight:"20px"}}>Nueva Factura</Button>
                <Form inline>
                    <FormControl type="text" placeholder="Factura No." className="mr-sm-2" />
                    <Button variant="outline-info">Buscar</Button>
                </Form>
            </Navbar>
        );
    }
}
  
export default NavigationBar;