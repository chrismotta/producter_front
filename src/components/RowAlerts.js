import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

class RowAlerts extends Component {
    render() {
        let datosIncompletos = this.props.id % 3 == 0;
        let facturaVencida = this.props.id % 2 == 0;

        return (
            <span>
                <FontAwesomeIcon
                    size="lg"
                    icon={faInfoCircle}
                    className={"icon-right-margin " + (datosIncompletos ? "text-warning" : "text-disabled")}
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

export default RowAlerts;