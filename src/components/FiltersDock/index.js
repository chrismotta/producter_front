import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
import Dock from 'react-dock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faFilter } from '@fortawesome/free-solid-svg-icons';

import style from './style.module.scss'
import Form from 'react-bootstrap/Form';

class FiltersDock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.openDock,
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            isVisible: nextProps.openDock,
        })
    }

    handleClose = () => {
        this.setState({ isVisible: !this.state.isVisible })
        this.props.handleOpen(false)
    }

    render() {
        const statusList = [
            {value: "fabrica", label: "Listo en Fábrica"},
            {value: "deposito", label: "Listo en Déposito"},
            {value: "local", label: "Listo en Local"},
            {value: "produccion", label: "En Producción"},
            {value: "reclamo", label: "Reclamo"},
            {value: "atrazado", label: "Atrazado"},
            {value: "entregado", label: "Entregado"},
            {value: "pendiente", label: "Pendiente"},
            {value: "falmohadon", label: "Faltan Almohadones"},
            {value: "flores", label: "Listo en Flores"},
            {value: "stock", label: "STOCK"},
        ]

        const retiroList = [
            {value: "fleteconf", label: "Flete Confirmado"},
            {value: "local", label: "Retire en Local"},
        ]

        const paymentList = [
            {value: "1", label: "Pagó todo"},
            {value: "2", label: "Reforzar seña"},
            {value: "3", label: "No pagó nada"},
        ]

        return (
            <Dock 
                // dockStyle={{paddingLeft:"15px"}}
                position='left' 
                dimMode="none"
                fluid={false} 
                size={250} 
                isVisible={this.state.isVisible}
                >
                <div className={style.filtersContainer}>
                    <Button 
                        onClick={this.handleClose}
                        variant="outline-secondary" 
                        size="sm" 
                        className={style.closeButton}
                        >
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </Button>

                    <div className="p-3">
                        <h3><FontAwesomeIcon icon={faFilter} /> Filtros</h3>
                        <Form onSubmit={this.handleOnSubmit}>
                            <div className={style.filterGroup}>
                                <h5>Ordenar por...</h5>
                                <Form.Control as="select" size="sm">
                                    <option>N° de Factura</option>
                                    <option>Nombre</option>
                                    <option>Status</option>
                                </Form.Control>
                            </div>

                            <h5>Rango de Facturas</h5>
                            <div className={style.filterGroup}>
                                <Form.Control placeholder="Desde" size="sm" />
                                <Form.Control placeholder="Hasta" size="sm" />
                            </div>

                            <h5>Estados</h5>
                            <div className={style.filterGroup}>
                                {
                                    statusList.map((item, index) => (
                                        <Form.Check 
                                            type="checkbox"
                                            label={item.label}
                                            value={item.value}
                                            key={index}
                                            // custom
                                        />
                                    ))
                                }
                            </div>

                            <h5>Pago</h5>
                            <div className={style.filterGroup}>
                                {
                                    paymentList.map((item, index) => (
                                        <Form.Check 
                                            type="checkbox"
                                            label={item.label}
                                            value={item.value}
                                            key={index}
                                            // custom
                                        />
                                    ))
                                }
                            </div>

                            <h5>Retiro</h5>
                            <div className={style.filterGroup}>
                                {
                                    retiroList.map((item, index) => (
                                        <Form.Check 
                                            type="checkbox"
                                            label={item.label}
                                            value={item.value}
                                            key={index}
                                            // custom
                                        />
                                    ))
                                }
                            </div>
                        </Form>
                    </div>
                </div>
            </Dock>
        )
    }
}

export default FiltersDock