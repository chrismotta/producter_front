import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class OrdenDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            detail: this.props.detail
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            detail: nextProps.detail
        })
    }

    render() {
        const {detail} = this.state;
        return (
            <div>
                <h4>Factura N. {this.state.detail.factura}</h4>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Caracteristicas</Form.Label>
                        <Form.Control as="textarea" rows="5" value={detail.caracteristicas} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Comentarios</Form.Label>
                        <Form.Control as="textarea" rows="5" value={detail.comentarios} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Tela</Form.Label>
                        <Form.Control as="textarea" rows="5" value={detail.tela} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="" value={detail.nombre} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="" value={detail.email} />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default OrdenDetail;