import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Dock from 'react-dock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPen, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
// import DatePicker from "react-datepicker";

import OrdenDetail from './OrdenDetail';
import style from './style.module.scss'

class DetailDock extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.openDock,
            rowDetail: null
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            isVisible: nextProps.openDock,
            rowDetail: nextProps.rowDetail
        })
    }

    handleClose = () => {
        this.setState({ isVisible: !this.state.isVisible })
        this.props.handleOpen(false)
    }

    render() {
        return (
            <Dock 
                // dockStyle={{paddingRight:"15px"}}
                position='left' 
                dimMode="none"
                fluid={false} 
                size={500} 
                isVisible={this.state.isVisible}
                >
                <div className={style.detailContainer}>
                    <Button 
                        onClick={this.handleClose}
                        variant="outline-secondary" 
                        size="sm" 
                        className={style.closeButton}
                    >
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </Button>
                    <div className="p-3">
                        <h3><FontAwesomeIcon icon={faFileAlt} /> Nueva Orden</h3>
                        {
                            // this.state.rowDetail ?
                            <OrdenDetail detail={this.state.rowDetail} ></OrdenDetail> 
                            // :
                            // <div>No hay ninguna factura seleccionada</div>
                        }
                    </div>
                </div>
            </Dock>
        );
    }
}

export default DetailDock;