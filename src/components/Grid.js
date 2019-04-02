import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Spinner from 'react-bootstrap/Spinner';
import ActionColumn from './ActionColumn';
import RowAlerts from './RowAlerts';
import moment from 'moment'

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
    '1': 'Pagó seña',
    '2': 'Pagó todo',
    '3': 'Impago',
}
const comerciales = {
    '1': 'Natalia',
    '2': 'Catalina',
    '3': 'Rebeca',
}

function rowAlerts(cell, row) {
    return (
        <RowAlerts id={row.id} />
    );
}

const loading = <div>
    <Spinner animation="grow" variant="info" />
    <Spinner animation="grow" variant="info" />
    <Spinner animation="grow" variant="info" />
</div>;
const noData = <h4 className="text-secondary">
    No hay órdenes para esta fecha. Seleccioná otra fecha en el calendario inferior.
</h4>;
const errorData = <h4 className="text-secondary">
    Error al conectar con el servidor. Volvé a intentar más tarde.
</h4>;

class Grid extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            products: [],
            thisDate: this.props.thisDate,
            gridMsg: loading
        };
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

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.thisDate);
        this.setState({
            thisDate: nextProps.thisDate
        });
        this.fetchData(nextProps.thisDate);
    }

    componentDidMount() {
        this.fetchData(this.state.thisDate);
    }

    componentDidUpdate() {
        //this.fetchData();
    }

    fetchData = (_date) => {

        // id	"37063"
        // NroBoleta	"45531"
        // RazonSocial	"claudia cochetti"
        // Telefono	"1131041113"
        // EMAIL	"claudia.cochetti.fran@hotmail.com"
        // FechaIng	"16/12/2018"
        // FechaEst	"22/03/2019"
        // FechaConf	""
        // Caracteristicas	"NATALIA: NO HACER STOCK LOCAL: 1 Mesa blanca, 1.40 x 1.(entregado)"
        // Descripcion	""
        // mentrega	"retiralocal"
        // Comentario	null
        // Estado	"entregado"
        // localidad	"0"
        // datosInc	"0-0-0"
        // expreso	""
        // pago	"2"
        // comboComent	"0"
        // estructura_tipo	"PANA FUCSIA Y ES FAB 26/12///gipsy ivory 3m mande 28/12 recibi 28/12 ana"
        // estructura_FechaPed	"00/00/2000"
        // estructura_FechaEnt	"00/00/2000"
        // carpinteria_tipo	"los lazaristas 322 , escobar"
        // carpinteria_FechaPed	"00/00/2000"
        // carpinteria_FechaEnt	"00/00/2000"
        // idOld	"0"
        // debugger;

        console.log('monta');
        console.log(_date);
        let date = moment(_date).format('DD/MM/YYYY');
        let limit = '20';
        let endpoint = 'http://jazmeendeco.com.ar.ci5.toservers.com/api/?date='+date+'&limit='+limit;

        let _products = [];
        let i = 1;

        this.setState({
            products: [],
            gridMsg: loading
        });
        
        fetch(endpoint)
            .then(res => res.json())
            .then(results => {
                if(results.length > 0){
                    results.map((item) => {
                        _products.push({
                            id: item.id,
                            factura: item.NroBoleta,
                            nombre: item.RazonSocial,
                            estado: item.Estado,
                            retiro: item.mentrega,
                            pago: pagos[item.pago],
                            comercial: comerciales[i % Object.keys(comerciales).length + 1],
                            telefono: item.Telefono,
                            email: item.EMAIL,
                            tela: item.estructura_tipo ? item.estructura_tipo : "",
                            fechaProveedor: item.estructura_FechaEnt,
                            fechaFabrica: item.carpinteria_FechaEnt,
                            caracteristicas: item.Caracteristicas ? item.Caracteristicas : "",
                            comentarios: item.Comentario ? item.Comentario : "",
                            // datos: "\n15511833490\nnatalia.barberis@hotmail.com\nDomicilio:\nruta 3 km 56500",
                            // expreso: expresos[i % Object.keys(expresos).length + 1],
                            // expresoComentario: "Buenos Aires Av Richeri y Boulongne sur Mer. Mercado central Nave D3 1144806666 Lunes a viernes de 8:00 a 17:00 Revello María Fernanda DNI 26392567 Tel 1134763801 Dirección Almirante Espora 236 Huerta Grande Cordoba CP 5174"
                        });
                        i++;
                    });
                    
                    this.setState({
                        products: _products
                    });
                } else {
                    this.setState({
                        products: [],
                        gridMsg: noData
                    });
                }
            })
            .catch(error => {
                this.setState({
                    products: [],
                    gridMsg: errorData
                });
            });
        
    }

    render() {
        const options = {
            onRowClick: (row) => {
                this.props.onRowClick(row);
            },
            // onRowDoubleClick: (row) => {
            //     this.props.onRowClick(row);
            // }
            noDataText: <div style={{padding:"30px 0px"}}>{this.state.gridMsg}</div> 
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
                    data={this.state.products}
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
                    <TableHeaderColumn dataField='action' width='127' dataFormat={this.actionColumn}></TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default Grid