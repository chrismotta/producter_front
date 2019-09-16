import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from '../img/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faCubes, faPrint, faUser, faCalendarAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

class NavigationBar extends Component {
    
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top" className="justify-content-between">
                <Navbar.Brand href="#home" className="bg-dark" style={{
                    margin: "-5px 10px -5px -20px",
                    width: "95px",
                    height: "50px",
                    backgroundImage: `url(${logo})`,
                    backgroundBlendMode: 'lighten',
                    backgroundSize: "85px",
                    backgroundPosition: "10px 0px",
                    backgroundRepeat: "no-repeat"
                }}>
                </Navbar.Brand>
                <Nav className="mr-auto" activeKey="calendario">
                    <Nav.Link href="#calendario" eventKey="calendario">
                        <FontAwesomeIcon icon={faCalendarAlt} /> Calendario</Nav.Link>
                    <Nav.Link href="#listado" eventKey="listado">
                        <FontAwesomeIcon icon={faListAlt} /> Listado</Nav.Link>
                    <Nav.Link href="#stock" eventKey="stock">
                        <FontAwesomeIcon icon={faCubes} /> Stock</Nav.Link>
                    <Nav.Link href="#imprimir" eventKey="imprimir">
                        <FontAwesomeIcon icon={faPrint} /> Imprimir</Nav.Link>
                </Nav>                
                <Nav className="mr-sm-2" activeKey="calendario">
                    <Button variant="outline-info" className="float-right" style={{marginRight:"20px"}}>Nueva Factura</Button>
                    <Form inline style={{marginRight:"20px"}}>
                        <FormControl type="text" placeholder="Factura No." className="mr-sm-2" />
                        <Button variant="outline-info">Buscar</Button>
                    </Form>
                    <Dropdown as={Nav.Item}>
                        <Dropdown.Toggle as={Nav.Link}>
                            <FontAwesomeIcon icon={faUser} className="text-info" />
                            <span style={{marginLeft:"10px"}} className="text-info">Garbini, Jazmin</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu alignRight>
                            <Dropdown.Header className="text-center">
                                <FontAwesomeIcon icon={faUserCircle} className="text-dark" size="8x" />
                                {/* <Image src="holder.js/171x180" roundedCircle /> */}
                            </Dropdown.Header>
                            <Dropdown.Item>Datos Personales</Dropdown.Item>
                            <Dropdown.Item>Cambiar Contraseña</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header className="dropdown-item"><Link to="/logout">Salir</Link></Dropdown.Header>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar>
        );
    }
}
  
export default NavigationBar;