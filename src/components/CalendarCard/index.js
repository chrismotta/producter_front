import React from 'react'
import moment from 'moment'
import 'moment/locale/es'
import style from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPhone, 
    faEnvelope, 
    faMapMarkerAlt, 
    faAddressCard, 
    faCalendarTimes, 
    faCalendar, 
    faCalendarAlt, 
    faFileInvoice,
    faCheckSquare,
    faTruck,
    faCommentMedical,
    faPen,
    faTrash,
    faPaperclip,
    faPrint
} from '@fortawesome/free-solid-svg-icons'
import EditableText from '../EditableText'
import Skeleton from '../SkeletonText/Skeleton'

moment.locale('es')

const CalendarCard = ({data, editOrder}) => {

    const empty = !data._id;

    const paymentList = [
        "Pagó todo",
        "Reforzar seña",
        "No pagó nada"
    ]

    return (
        <div className={style.calendarcard__container} data-id={data._id}>
            
            <div className={style.title}>ORDEN</div>
            <div className={style.title}>
                CARACTERISTICAS
                <FontAwesomeIcon icon={faCommentMedical} className={style.plusIcon} />
            </div>
            <div className={style.title}>
                TELA
                <FontAwesomeIcon icon={faCommentMedical} className={style.plusIcon} />
            </div>
            <div className={style.title}>
                COMENTARIOS
                <FontAwesomeIcon icon={faCommentMedical} className={style.plusIcon} />
            </div>
            <div className={style.title}>DATOS</div>
            
            <div className={style.order}>
                <div className={style.orderContainer}>
                    <p>{
                        !empty ?
                        <>
                            <FontAwesomeIcon icon={faFileInvoice} className={style.dataIcon} />
                            <strong>Factura: </strong>{data.extID}
                        </>
                        :
                        <Skeleton height="14px" width="140px"/>
                    }</p>
                    <p>{
                        !empty ?
                        <>
                            <FontAwesomeIcon icon={faCalendar} className={style.dataIcon} />
                            <strong>Pedido: </strong>{moment(data.entryDate).format("DD/MM/YYYY")}
                        </>
                        :
                        <Skeleton height="14px" width="150px"/>
                    }</p>
                    <p>{
                        !empty ?
                        <>
                            <FontAwesomeIcon icon={faCalendarAlt} className={style.dataIcon} />
                            <strong>Entrega: </strong>{moment(data.deliveryDate).format("DD/MM/YYYY")}
                        </>
                        :
                        <Skeleton height="14px" width="120px"/>
                    }</p>
                    <p>{
                        !empty ?
                        <>
                            <FontAwesomeIcon icon={faCheckSquare} className={style.dataIcon} />
                            <strong>Status: </strong>{data.status}
                        </>
                        :
                        <Skeleton height="14px" width="140px"/>
                    }</p>
                    <p>{
                        !empty ?
                        <>
                            <FontAwesomeIcon icon={faCheckSquare} className={style.dataIcon} />
                            <strong>Pago: </strong>{paymentList[data.paymentType]}
                        </>
                        :
                        <Skeleton height="14px" width="150px"/>
                    }</p>
                    <p>{
                        !empty ?
                        <>
                            <FontAwesomeIcon icon={faTruck} className={style.dataIcon} />
                            <strong>Retiro: </strong>{data.deliveryType}
                        </>
                        :
                        <Skeleton height="14px" width="120px"/>
                    }</p>
                </div>
                <p className={style.statusRow}>
                    <FontAwesomeIcon icon={faAddressCard} className={style.statusIcon} />
                    <span className={style.statusText}>DATOS INC.</span>
                    <FontAwesomeIcon icon={faCalendarTimes} className={style.statusIcon} />
                    <span className={style.statusText}>FACTURA VENCIDA</span>
                </p>
            </div>

            <EditableText data={data.caracteristics} />
            <EditableText data={data.fabric} />
            <EditableText data={data.comments} />
            <div className={style.data}>
                <div className={style.dataContainer}>
                    <p className={style.name}>{data.longName || <Skeleton height="18px" width="100px"/>}</p>
                    <p>
                        {
                            !empty ?
                            <>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className={style.dataIcon} />
                                {data.address}
                            </>
                            :
                            <Skeleton height="18px" width="200px"/>
                        }
                    </p>
                    <p>
                        {
                            !empty ? 
                            <>
                                <FontAwesomeIcon icon={faPhone} className={style.dataIcon} />
                                {data.telephone}
                            </>
                            :
                            <Skeleton height="18px" width="150px"/>                            
                        }
                    </p>
                    <p>
                        {
                            !empty ? 
                            <>
                                <FontAwesomeIcon icon={faEnvelope} className={style.dataIcon} />
                                <a href={`mailto:${data.email}`}>{data.email}</a>
                            </>
                            :
                            <Skeleton height="18px" width="180px"/>                            
                        }
                    </p>
                </div>

                <div className={style.title}>
                    ACCIONES
                </div>

                <div className={style.actions}>
                    <button 
                        disabled={empty} 
                        className="btn btn-outline-info" 
                        onClick={() => editOrder(data._id)}>
                        <FontAwesomeIcon icon={faPen} className={style.actionIcon} />
                    </button>
                    <button disabled={empty} className="btn btn-outline-info" onClick={() => {alert("test")}}>
                        <FontAwesomeIcon icon={faPrint} className={style.actionIcon} />
                    </button>
                    <button disabled={empty} className="btn btn-outline-danger" onClick={() => {alert("test")}}>
                        <FontAwesomeIcon icon={faTrash} className={style.actionIcon} />
                    </button>
                    <button disabled={empty} className="btn btn-outline-success" onClick={() => {alert("test")}}>
                        <FontAwesomeIcon icon={faPaperclip} className={style.actionIcon} />
                    </button>
                    <button disabled={empty} className="btn btn-outline-success" onClick={() => {alert("test")}}>
                        <FontAwesomeIcon icon={faPaperclip} className={style.actionIcon} />
                    </button>
                    <button disabled={empty} className="btn btn-outline-success" onClick={() => {alert("test")}}>
                        <FontAwesomeIcon icon={faPaperclip} className={style.actionIcon} />
                    </button>

                </div>
            </div>

        </div>
    )
}

export default CalendarCard