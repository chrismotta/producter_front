import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import { faInfoCircle, faExclamationCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const products = [];

function addProducts(quantity) {
    const startId = 43585;
    for (let i = 0; i < quantity; i++) {
        const id = startId + i;
        products.push({
            ID: i,
            factura: "43585\n27/03/2019\nEstado:\nListo en Fábrica\nRetiro: \nRetira en Fábrica",
            datos: "NATALIA BARBERIS\n15511833490\nnatalia.barberis@hotmail.com\nDomicilio:\nruta 3 km 56500",
            caracteristicas: "Sabrina: 1 shulay 280x170x95, bf gris claro c/vivos, 7 tyt en respaldo, 2 placas enteras soft blandas en asiento, chaise visto de frente a la izquierda, patas conicas cuadradas chocolate",
            comentarios: "//sale con 45438//TAPIZADO CORTADO ALMOHADONES CORTADOS ESTRUCTURA LISTA 13/2///REVISADO/di la orden a evelyn y a luis el 25/3ana ////le di la orden a carlitos y avise que sale 27 ana 26/3",
            pago: "Pagó todo",
            telas: "OJOOO HAY QUE PEDIR grover #153988148 8mt NO TENGO DATOS PROVEEDOR, VANE 21/03.///Pana Lapsemson nueva Aqua en Fábrica Alcides 21/03/// llego a fabrica tela grover 153988148, ana 26 de marzo",
            fecha: "Proveedor\n00/00/2000\n00/00/2000\nFabrica\n00/00/2000\n00/00/2000",
            expreso: "Cruz del sur Buenos Aires Av Richeri y Boulongne sur Mer. Mercado central Nave D3 1144806666 Lunes a viernes de 8:00 a 17:00 Revello María Fernanda DNI 26392567 Tel 1134763801 Dirección Almirante Espora 236 Huerta Grande Cordoba CP 5174"
        });
    }
}

addProducts(50);

const selectRowProp = {
    mode: 'checkbox',
    bgColor: 'pink',
    // showOnlySelected: true
};

class ActionFormatter extends React.Component {
    render() {
      return (
            <span>
                <Button onClick={this.props.onClick} variant="outline-info" size="sm" className="icon-right-margin"><FontAwesomeIcon icon="print" /></Button>
                <Button onClick={this.props.onClick} variant="outline-info" size="sm" className="icon-right-margin"><FontAwesomeIcon icon="paperclip" /></Button>
                <Button onClick={this.props.onClick} variant="outline-danger" size="sm" ><FontAwesomeIcon icon="trash-alt" /></Button>
            </span>
      );
    }
}

function actionFormatter(cell, row) {
    return (
        <ActionFormatter onClick={()=>alert(row.ID)} />
    );
}

class RowFormatter extends React.Component {
    render() {
        let datosIncompletos = this.props.ID > 2;
        let facturaVencida = this.props.ID > 4;

        return (
            <span>
                <FontAwesomeIcon 
                    size="lg" 
                    icon={faInfoCircle} 
                    className={"icon-right-margin "+(datosIncompletos ? "text-warning" : "text-disabled")} 
                    title={datosIncompletos ? "Datos Incompletos" : ""}
                />
                <FontAwesomeIcon 
                    size="lg" 
                    icon={faExclamationTriangle} 
                    className={facturaVencida ? "text-danger" : "text-disabled"} 
                    title={facturaVencida ? "Factura Vencida" : ""}
                    />
            </span>
        );
    }
}

function rowFormatter(cell, row) {
    return (
        <RowFormatter ID={row.ID} />
    );
}

class Grid extends Component {
    render() {
        return (
            <div style={{padding:"10px"}}>
            <BootstrapTable 
                ref='table' 
                data={products} 
                // selectRow={selectRowProp} 
                striped 
                hover
                // insertRow={ true }
                // deleteRow={ true }
                // search={ true } 
                >
                <TableHeaderColumn dataField='info' width='70' dataFormat={ rowFormatter }></TableHeaderColumn>
                <TableHeaderColumn dataSort={true} dataField='factura' isKey={true}>Factura No.</TableHeaderColumn>
                <TableHeaderColumn dataSort={true} dataField='datos'>Datos Personales</TableHeaderColumn>
                <TableHeaderColumn dataSort={true} dataField='caracteristicas'>Caracteristocas</TableHeaderColumn>
                <TableHeaderColumn dataSort={true} dataField='comentarios'>Comentarios</TableHeaderColumn>
                <TableHeaderColumn dataSort={true} dataField='pago'>Pago</TableHeaderColumn>
                <TableHeaderColumn dataSort={true} dataField='telas'>Telas</TableHeaderColumn>
                <TableHeaderColumn dataSort={true} dataField='fecha'>Fecha</TableHeaderColumn>
                <TableHeaderColumn dataSort={true} dataField='expreso'>Expreso</TableHeaderColumn>
                <TableHeaderColumn dataField='action' width='127' dataFormat={ actionFormatter }></TableHeaderColumn>
            </BootstrapTable>
            </div>
        );
    }
}

export default Grid