import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import Dropdown from 'react-bootstrap/Dropdown';

class DetailSection extends Component {
    render() {
        let labelColor = this.props.labelColor ? this.props.labelColor : "info";
        return (
            <div className="mt-5 mb-4">
                <hr className="mb-1" />
                <h5><span className={`badge badge-${labelColor}`}>{this.props.children}</span></h5>
            </div>
        )
    }
}
class OrdenDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detail: this.props.detail
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            detail: nextProps.detail
        })
    }

    detailSection = (title) => {
        return title;
    }

    render() {
        const { detail } = this.state;
        return (
            <div>
                <h4>Factura N. {this.state.detail.factura}</h4>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Caracteristicas</Form.Label>
                        <Form.Control size="sm" as="textarea" rows="5" value={detail.caracteristicas} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Comentarios</Form.Label>
                        <Form.Control size="sm" as="textarea" rows="5" value={detail.comentarios} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Tela</Form.Label>
                        <Form.Control size="sm" as="textarea" rows="5" value={detail.tela} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1" as="row">
                        <Form.Label column sm="5">Fecha de Emisión</Form.Label>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label column sm="5">Fecha de Entrega</Form.Label>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <DetailSection>DATOS PERSONALES</DetailSection>
                    
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="" value={detail.nombre} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="" value={detail.nombre} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control size="sm" type="email" placeholder="" value={detail.email} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Domicilio</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="" value={detail.nombre} />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Datos incompletos" />
                    </Form.Group>

                    <DetailSection labelColor="danger">PARA FACTURAS DEL INTERIOR</DetailSection>


                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Datos del expreso</Form.Label>
                        <Form.Control size="sm" as="textarea" rows="5" value={detail.expreso} />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Datos incompletos" />
                    </Form.Group>

                </Form>
            </div>
        );
    }
}

export default OrdenDetail;