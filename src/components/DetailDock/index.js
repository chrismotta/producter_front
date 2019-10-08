import React, { useEffect, useState } from 'react'
import Dock from 'react-dock'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
// import Nav from 'react-bootstrap/Nav';
// import DatePicker from "react-datepicker";

import OrderDetail from './OrderDetail'
import style from './style.module.scss'

export default function(props) {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         isVisible: this.props.openDock,
    //         editOrder: this.props.editOrder,
    //     }
    // }

    const [isVisible, setIsVisible] = useState(props.openDock)
    const [editOrder, setEditOrder] = useState(props.editOrder)

    // componentWillReceiveProps(nextProps) {
    //     console.log(this.props.editOrder)
    //     this.setState({
    //         isVisible: nextProps.openDock,
    //         editOrder: nextProps.editOrder,
    //     })
    // }

    useEffect(() => {
        setIsVisible(props.openDock)
        // setEditOrder(props.editOrder)
    }, [props.openDock])

    const handleClose = () => {
        // this.setState({ isVisible: !this.state.isVisible })
        setIsVisible(false)
        props.handleOpen(false)
    }

    // render() {
        return (
            <Dock
                // dockStyle={{paddingRight:"15px"}}
                position="left"
                dimMode="none"
                fluid={false}
                size={500}
                isVisible={isVisible}
            >
                <div className={style.detailContainer}>
                    <Button
                        onClick={handleClose}
                        variant="outline-secondary"
                        size="sm"
                        className={style.closeButton}
                    >
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </Button>
                    <div className="p-3">
                        <h3>
                            <FontAwesomeIcon icon={faFileAlt} /> Nueva Orden
                        </h3>
                        {
                            // this.state.rowDetail ?
                            <OrderDetail
                                handleClose={handleClose}
                                editOrder={editOrder}
                            ></OrderDetail>
                            // :
                            // <div>No hay ninguna factura seleccionada</div>
                        }
                    </div>
                </div>
            </Dock>
        )
    // }
}

// export default DetailDock
