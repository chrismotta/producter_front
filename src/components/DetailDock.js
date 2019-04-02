import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import DatePicker from "react-datepicker";
import Dock from 'react-dock';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faWindowClose, faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import OrdenDetail from './OrdenDetail';

class DetailDock extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.openDock,
            rowDetail: this.props.rowDetail
        };
    }

    componentWillReceiveProps(nextProps){
        // console.log(nextProps);
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
                    <div className="text-left p-2">
                        <Button 
                            onClick={() => this.setState({ isVisible: !this.state.isVisible })}
                            variant="outline-danger" 
                            size="sm" 
                            className="icon-right-margin"
                            >
                            <FontAwesomeIcon icon={faTimes} size="lg" />
                        </Button>
                        {
                            this.state.rowDetail ?
                            <Button 
                                variant="outline-info" 
                                size="sm" 
                                >
                                <FontAwesomeIcon icon={faPen} />
                            </Button> 
                            :
                            null
                        }
                    </div>
                    <div className="text-left p-3">
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

export default DetailDock;