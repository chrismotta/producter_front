import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
    // faListAlt,
    // faCubes,
    // faPrint,
    // faCalendarAlt,
    faUser,
    faUserCircle,
    faFilter,
    faFileAlt,
    faBell
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../img/logo.jpg";
import style from './style.module.scss'

class NavigationBar extends Component {
    handleNewOrder = data => {
        return "";
    };

    render() {
        return (
            <Navbar
                bg="dark"
                variant="dark"
                sticky="top"
                className={style.navigationBar}
            >
                <Navbar.Brand
                    className="bg-dark"
                    style={{
                        margin: "-5px 10px -5px -20px",
                        width: "95px",
                        height: "50px",
                        backgroundImage: `url(${logo})`,
                        backgroundBlendMode: "lighten",
                        backgroundSize: "85px",
                        backgroundPosition: "10px 0px",
                        backgroundRepeat: "no-repeat"
                    }}
                ></Navbar.Brand>
                <Navbar.Brand>Gestor de Producción</Navbar.Brand>
                <Nav className="mr-auto" activeKey="new">
                {/* 
                    <Nav.Link eventKey="new"
                        onClick={() => this.props.handleOpenDetail(true, null)}
                    >
                        <FontAwesomeIcon icon={faFileAlt} /> Nueva Orden
                    </Nav.Link>
                    <Nav.Link eventKey="filter"
                        onClick={() => this.props.handleOpenFilters(true)}
                    >
                        <FontAwesomeIcon icon={faFilter} /> Filtros
                    </Nav.Link> */}
                    {/* <Nav.Link href="#listado" eventKey="listado">
                        <FontAwesomeIcon icon={faListAlt} /> Listado
                    </Nav.Link>
                    <Nav.Link href="#stock" eventKey="stock">
                        <FontAwesomeIcon icon={faCubes} /> Stock
                    </Nav.Link>
                    <Nav.Link href="#imprimir" eventKey="imprimir">
                        <FontAwesomeIcon icon={faPrint} /> Imprimir
                    </Nav.Link> 
                */}
                </Nav>

                <Button
                    variant="outline-light"
                    size="sm"
                    style={{ marginRight: "20px" }}
                    onClick={() => this.props.handleOpenDetail(true, null)}
                >
                    <FontAwesomeIcon icon={faFileAlt} /> Nueva Orden
                </Button> 
                <Button
                    variant="outline-light"
                    size="sm"
                    style={{ marginRight: "20px" }}
                    onClick={() => this.props.handleOpenFilters(true)}
                    >
                    <FontAwesomeIcon icon={faFilter} /> Filtros
                </Button>
                <Form inline style={{ marginRight: "20px" }}>
                    <FormControl
                        type="text"
                        size="sm"
                        placeholder="Nombre o Factura N°"
                        className="mr-sm-2"
                    />
                    <Button 
                        variant="outline-info"
                        size="sm"
                        >Buscar</Button>
                </Form>

                <Dropdown as={Nav.Item} className="justify-content-end">
                    <Dropdown.Toggle as={Nav.Link} 
                        drop={null} >
                        <FontAwesomeIcon
                            icon={faBell}
                            className="text-info"
                            />
                    </Dropdown.Toggle>
                    <Dropdown.Menu alignRight>
                        <Dropdown.Item>Notificacion 1</Dropdown.Item>
                        <Dropdown.Item>Notificacion 2</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown as={Nav.Item} className="justify-content-end">
                    <Dropdown.Toggle as={Nav.Link}>
                        <FontAwesomeIcon
                            icon={faUser}
                            className="text-info"
                        />
                        <span
                            style={{ marginLeft: "10px" }}
                            className="text-info"
                        >
                            Garbini, Jazmin
                        </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu alignRight>
                        <Dropdown.Header className="text-center">
                            <FontAwesomeIcon
                                icon={faUserCircle}
                                className="text-dark"
                                size="8x"
                            />
                        </Dropdown.Header>
                        <Dropdown.Item>Datos Personales</Dropdown.Item>
                        <Dropdown.Item>Cambiar Contraseña</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header className="dropdown-item">
                            <Link to="/logout">Salir</Link>
                        </Dropdown.Header>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
        );
    }
}

export default NavigationBar;
