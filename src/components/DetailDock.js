import es from 'date-fns/locale/es';
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import DatePicker from "react-datepicker";
import Dock from 'react-dock';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faPencilAlt, faTimes, faPenSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons';

class DetailDock extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.openDock,
            rowDetail: this.props.rowDetail
        };
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            isVisible: nextProps.openDock,
            rowDetail: nextProps.rowDetail
        })
    }

    render() {
        return (
            <Dock 
                position='right' 
                dimMode="none"
                fluid={false} 
                size={500} 
                isVisible={this.state.isVisible}>
                <div>
                    <div style={{padding:'10px 10px 0px 10px'}} className="text-left">
                        <FontAwesomeIcon 
                            onClick={() => this.setState({ isVisible: !this.state.isVisible })}
                            icon={faWindowClose} 
                            className="icon-right-margin text-danger"
                            style={{cursor:"pointer"}} 
                            size="lg"
                            />
                        {
                            this.state.rowDetail ?
                            <FontAwesomeIcon 
                                icon={faPenSquare} 
                                className="text-info" 
                                style={{cursor:"pointer"}} 
                                size="lg"
                                /> :
                            null
                        }
                    </div>
                    <div style={{padding:'10px 30px 20px 20px'}} className="text-left">
                        {
                            this.state.rowDetail ?
                            <OrdenDetail detail={this.state.rowDetail} ></OrdenDetail> :
                            <div>No hay ninguna factura seleccionada</div>
                        }
                    </div>
                </div>
            </Dock>
        );
    }
}

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
        return (
            <div>Factura N. {this.state.detail.factura}</div>
        );
    }
}
export default DetailDock;