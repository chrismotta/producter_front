import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const products = [];

function addProducts(quantity) {
    const startId = products.length;
    for (let i = 0; i < quantity; i++) {
        const id = startId + i;
        products.push({
            factura: id,
            datos: 'Item name ' + id,
            caracteristicas: 2100 + i,
            pago: 2100 + i,
            telas: 2100 + i,
            fecha: 2100 + i,
            expreso: 2100 + i,
            acciones: 2100 + i
        });
    }
}

addProducts(50);

class Grid extends Component {
    render() {
        return (
            <BootstrapTable data={ products }>
                <TableHeaderColumn dataField='factura' isKey={ true } dataSort={ true }>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='datos'>Datos Personales</TableHeaderColumn>
                <TableHeaderColumn dataField='caracteristicas'>Caracteristocas</TableHeaderColumn>
                <TableHeaderColumn dataField='pago'>Pago</TableHeaderColumn>
                <TableHeaderColumn dataField='telas'>Telas</TableHeaderColumn>
                <TableHeaderColumn dataField='fecha'>Fecha</TableHeaderColumn>
                <TableHeaderColumn dataField='expreso'>Expreso</TableHeaderColumn>
                <TableHeaderColumn dataField='acciones'></TableHeaderColumn>
            </BootstrapTable>
        );
    }
}
  
export default Grid;