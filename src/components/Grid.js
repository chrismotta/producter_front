import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import ActionColumn from './ActionColumn';
import RowAlerts from './RowAlerts';

const products = [];

const estados = {
    '1': 'En Stock',
    '2': 'Pendiente',
    '3': 'Listo en Depósito',
    '4': 'Entregado'
}
const retiros = {
    '1': 'Retiro en Fabrica',
    '2': 'Retiro en Local',
    '3': 'Envio a domicilio',
}
const expresos = {
    '1': 'Tu Destino',
    '2': 'Cruz del Sur',
}
const telas = {
    '1': 'Pana Lapsemson',
    '2': 'Linen',
    '3': 'Baston Fino',
}
const colores = {
    '1': 'Aqua',
    '2': 'Merlot',
    '3': 'Grafito',
}
const pagos = {
    '1': 'Pagó Todo',
    '2': 'Pagó Seña',
    '3': 'Impago',
}
const comerciales = {
    '1': 'Natalia',
    '2': 'Catalina',
    '3': 'Rebeca',
}

function addProducts(quantity) {
    let startId = 43585;
    for (let i = 0; i < quantity; i++) {
        let fact = startId + i;
        products.push({
            id: i,
            factura: fact,
            estado: estados[i % Object.keys(estados).length + 1],
            retiro: retiros[i % Object.keys(retiros).length + 1],
            nombre: "NATALIA BARBERIS",
            comercial: comerciales[i % Object.keys(comerciales).length + 1],
            datos: "\n15511833490\nnatalia.barberis@hotmail.com\nDomicilio:\nruta 3 km 56500",
            pago: pagos[i % Object.keys(pagos).length + 1],
            tela: telas[i % Object.keys(telas).length + 1],
            color: colores[i % Object.keys(colores).length + 1],
            telasComentario: "OJOOO HAY QUE PEDIR grover #153988148 8mt NO TENGO DATOS PROVEEDOR, VANE 21/03.///Pana Lapsemson nueva Aqua en Fábrica Alcides 21/03/// llego a fabrica tela grover 153988148, ana 26 de marzo",
            fechaProveedor: "12-05-2018",
            fechaFabrica: "20-06-2018",
            caracteristicas: "Sabrina: 1 shulay 280x170x95, bf gris claro c/vivos, 7 tyt en respaldo, 2 placas enteras soft blandas en asiento, chaise visto de frente a la izquierda, patas conicas cuadradas chocolate",
            comentarios: "//sale con 45438//TAPIZADO CORTADO ALMOHADONES CORTADOS ESTRUCTURA LISTA 13/2///REVISADO/di la orden a evelyn y a luis el 25/3ana ////le di la orden a carlitos y avise que sale 27 ana 26/3",
            expreso: expresos[i % Object.keys(expresos).length + 1],
            expresoComentario: "Buenos Aires Av Richeri y Boulongne sur Mer. Mercado central Nave D3 1144806666 Lunes a viernes de 8:00 a 17:00 Revello María Fernanda DNI 26392567 Tel 1134763801 Dirección Almirante Espora 236 Huerta Grande Cordoba CP 5174"
        });
    }
}

addProducts(50);

function rowAlerts(cell, row) {
    return (
        <RowAlerts id={row.id} />
    );
}

class Grid extends Component {

    constructor(props) {
        super(props);
        let _colapseList = products.map((item, index) => ({ [item.ID]: false }));
        this.state = { collapseList: _colapseList };
    }

    handleCollapse = (row) => {
        alert("collapse row: " + row);
    }

    actionColumn = (cell, row) => {
        return (
            <ActionColumn
                onClick={() => alert("action: " + row.ID)}
                onClickCollapse={() => this.handleCollapse(row.ID)}
            />
        );
    }

    textCellExpanded = {
        whiteSpace: 'normal',
        height: '30px'
    };
    textCellCollapsed = {
        whiteSpace: 'nowrap',
        height: '30px'
    };

    render() {

        const options = {
            onRowClick: (row) => {
                this.props.onRowClick(row);
            },
            // onRowDoubleClick: (row) => {
            //     this.props.onRowClick(row);
            // }
        };

        const selectRowProp = {
            mode: 'radio',
            bgColor: 'pink',
            hideSelectColumn: true,
            clickToSelect: true
          };

        return (
            <div style={{ padding: "10px" }}>
                <BootstrapTable
                    ref='table'
                    data={products}
                    selectRow={selectRowProp} 
                    striped
                    condensed
                    hover
                    options={options}
                // insertRow={ true }
                // deleteRow={ true }
                // search={ true } 
                >
                    <TableHeaderColumn dataField='info' width='70' dataFormat={rowAlerts}></TableHeaderColumn>
                    <TableHeaderColumn dataSort={true} width='80' tdStyle={this.textCellCollapsed} dataField='factura' isKey={true}>Fact.</TableHeaderColumn>
                    <TableHeaderColumn dataSort={true} width='200' tdStyle={this.textCellCollapsed} dataField='nombre'>Nombre</TableHeaderColumn>
                    {/* <TableHeaderColumn dataSort={true} tdStyle={this.textCellCollapsed} dataField='tela'>Tela</TableHeaderColumn> */}
                    {/* <TableHeaderColumn dataSort={true} tdStyle={this.textCellCollapsed} dataField='color'>Color</TableHeaderColumn> */}
                    <TableHeaderColumn dataSort={true} tdStyle={this.textCellCollapsed} dataField='fechaProveedor'>Proveedor</TableHeaderColumn>
                    <TableHeaderColumn dataSort={true} tdStyle={this.textCellCollapsed} dataField='fechaFabrica'>Fabrica</TableHeaderColumn>
                    {/* <TableHeaderColumn dataSort={true} tdStyle={this.textCellCollapsed} dataField='caracteristicas'>Caracteristocas</TableHeaderColumn> */}
                    {/* <TableHeaderColumn dataSort={true} tdStyle={this.textCellCollapsed} dataField='comentarios'>Comentarios</TableHeaderColumn> */}
                    <TableHeaderColumn dataSort={true} tdStyle={this.textCellCollapsed} dataField='estado'>Estado</TableHeaderColumn>
                    <TableHeaderColumn dataSort={true} tdStyle={this.textCellCollapsed} dataField='retiro'>Retiro</TableHeaderColumn>
                    <TableHeaderColumn dataSort={true} tdStyle={this.textCellCollapsed} dataField='pago'>Pago</TableHeaderColumn>
                    <TableHeaderColumn dataSort={true} tdStyle={this.textCellCollapsed} dataField='comercial'>Comercial</TableHeaderColumn>
                    <TableHeaderColumn dataSort={true} tdStyle={this.textCellCollapsed} dataField='expreso'>Expreso</TableHeaderColumn>
                    <TableHeaderColumn dataField='action' width='127' dataFormat={this.actionColumn}></TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default Grid