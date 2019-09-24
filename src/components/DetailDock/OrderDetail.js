import React, { Component, useState } from 'react';
import { connect } from "react-redux"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button';

import { addOrder } from '../../actions'

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


function orderDetail(props) {
        // render() {
        // const detail = this.newDetail;
        const newOrder = {
            _id: "x",
            extId: "",
            longName: "",
            phone: "",
            email: "",
            address: "",
            caracteristics: [{
                text: "",
                user: null,
                date: null
            }],
            comments: [{
                text: "",
                user: null,
                date: null
            }],
            fabric: [{
                text: "",
                user: null,
                date: null
            }],
        }

        const [orderData, setOrderData] = useState(newOrder)

        const handleSubmit = (event) => {
            event.preventDefault();
            props.addOrder({newOrder: orderData});
            props.handleClose()
        }

        return (
            <>
                {/* <h4>Factura N. {detail.extId}</h4> */}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Caracteristicas</Form.Label>
                        <Form.Control size="sm" as="textarea" rows="5" 
                            value={orderData.caracteristics.text} 
                            onChange={event => setOrderData({
                                ...orderData, 
                                caracteristics: [{
                                    text: event.target.value,
                                    user: "admin",
                                    date: new Date()
                                }]
                            })}
                            />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Tela</Form.Label>
                        <Form.Control size="sm" as="textarea" rows="5" 
                            value={orderData.fabric.text} 
                            onChange={event => setOrderData({
                                ...orderData, 
                                fabric: [{
                                    text: event.target.value,
                                    user: "admin",
                                    date: new Date()
                                }]
                            })}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Comentarios</Form.Label>
                        <Form.Control size="sm" as="textarea" rows="5" 
                            value={orderData.comments.text} 
                            onChange={event => setOrderData({
                                ...orderData, 
                                comments: [{
                                    text: event.target.value,
                                    user: "admin",
                                    date: new Date()
                                }]
                            })}
                            />
                    </Form.Group>

                    <DetailSection>DATOS DEL PEDIDO</DetailSection>

                    <div key="inline-radio" className="mb-3">
                        <Form.Check inline type="radio" name="zona" label="Local" id="inline-$radio-1" />
                        <Form.Check inline type="radio" name="zona" label="Interior del país" id="inline-$radio-2" />
                    </div>
                    <Form.Group controlId="exampleForm.ControlSelect1" as={Row} >
                        <Form.Label column sm="4">Estado del pedido</Form.Label>
                        <Col sm="8">
                            <Form.Control size="sm" as="select">
                                <option value="fabrica">Listo en Fábrica</option>
                                <option value="deposito">Listo en Depósito</option>
                                <option value="local">Listo en Local</option>
                                <option value="produccion">En Producción</option>
                                <option value="reclamo">Reclamo</option>
                                <option value="atrazado">Atrazado</option>
                                <option value="entregado">Entregado</option>
                                <option value="pendiente">Pendiente</option>
                                <option value="incompleto">Incompleto</option>
                                <option value="tlistaflustrem">T.L. Falta Mesa</option>
                                <option value="tlistaflmesa">T.L. Falta Lustre Mesa</option>
                                <option value="falmohadon">Faltan Almohadones</option>
                                <option value="flores">Listo en Flores</option>
                                <option value="stock">STOCK</option>
                                <option value="recFab">Reclamo Listo en Fábrica</option>
                                <option value="recDep">Reclamo Listo en Depósito</option>
                                <option value="noHacer">No coord. retiro - NO HACER</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1" as={Row}>
                        <Form.Label column sm="4">Modo de retiro</Form.Label>
                        <Col sm="8">
                            <Form.Control size="sm" as="select">
                                <option value="poracordar">Por Acordar</option>
                                <option value="expreso">Expreso</option>
                                <option value="retiralocal">Retira Local</option>
                                <option value="pampa">Retira en Pampa</option>
                                <option value="depo">Retira en Fábrica</option>
                                <option value="locre">RETIRA LOCAL RECONFIRMADO</option>
                                <option value="gus">LLEVA GUSTAVO CONFIRMADO</option>
                                <option value="llevapablo">Lleva Flete</option>
                                <option value="llevascargo">Lleva Sin Cargo</option>
                                <option value="fleteExp">Flete a Expreso</option>
                                <option value="retiraExp">Retira Expreso de Fábrica</option>
                                <option value="fleConf">LLEVA FLETE CONFIRMADO</option>
                                <option value="expConf">EXPRESO CONTRATADO</option>
                                <option value="sinCoord">Sin coordiar - NO HACER</option>
                                <option value="tudestino">Flete Tu Destino</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1" as={Row}>
                        <Form.Label column sm="4">Fecha de Emisión</Form.Label>
                        <Col sm="8">
                            <DatePicker
                                className="form-control form-control-sm"
                                // selected={this.state.startDate}
                                // onChange={this.handleChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1" as={Row}>
                        <Form.Label column sm="4">Fecha de Entrega</Form.Label>
                        <Col sm="8">
                            <DatePicker
                                className="form-control form-control-sm"
                                // selected={this.state.startDate}
                                // onChange={this.handleChange}
                            />
                        </Col>
                    </Form.Group>

                    <DetailSection>DATOS PERSONALES</DetailSection>
                    
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="" 
                            //value={detail.longName} 
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="" 
                            //value={detail.phone} 
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control size="sm" type="email" placeholder="" 
                            //value={detail.email} 
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Domicilio</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="" 
                            //value={detail.address} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Datos incompletos" />
                    </Form.Group>

                    <DetailSection labelColor="danger">PARA FACTURAS DEL INTERIOR</DetailSection>


                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Datos del expreso</Form.Label>
                        <Form.Control size="sm" as="textarea" rows="5" 
                            //value={detail.address} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Datos incompletos" />
                    </Form.Group>

                    <div>
                        <Button 
                            type="submit"
                            variant="outline-success" 
                            block
                        >Guardar Orden</Button>
                    </div>

                </Form>
            </>
        );
    // }
}

const mapStateToProps = null
// state => {
//     return {
//         thisDate: state.thisDate,
//         orders: state.orders,
//         status: state.status,
//     }
// }

const mapDispatchToProps = {
    addOrder,
}

export default connect(mapStateToProps, mapDispatchToProps)(orderDetail);