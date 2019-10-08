import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import UserMain from '../../layouts/UserMain'
import CalendarCard from '../CalendarCard'
import NoResults from '../NoResults'
import { getOrdersByDate } from '../../actions'

const Calendar = (props) => {

    const [editOrder, setEditOrder] = useState(null)
    
    const handleDateChange = date => {
        let dateString = moment(date).format('YYYY-MM-DD')
        props.getOrdersByDate({ dateString })
        props.history.push(`/calendar/${dateString}`)
    }

    useEffect(
        () => {
            let dateString = props.match.params.date
                ? props.match.params.date
                : moment().format('YYYY-MM-DD')
    
            props.getOrdersByDate({ dateString: dateString })
        },
        []
    )

    const handleEditOrder = orderId => {
        let editOrder = props.orders.find(order => (order._id = orderId))
        console.log(editOrder)
        if (editOrder) {
            setEditOrder(editOrder)
        }
    }

    const renderCalendar = () => {
        
        if (props.status === 'loading') {
            return [1, 2, 3].map(item => <CalendarCard key={item} data={{}} />)
        }
        if (!props.orders || props.orders.length === 0) return <NoResults />

        return (
            <>
                {props.orders.map(item => (
                    <CalendarCard
                        key={item._id}
                        data={item}
                        editOrder={handleEditOrder}
                    />
                ))}
            </>
        )
    }

    return (
        <UserMain
            dateString={props.thisDate}
            onDateChange={handleDateChange}
            editOrder={editOrder}
        >
            {renderCalendar()}
        </UserMain>
    )
}

const mapStateToProps = state => {
    return {
        thisDate: state.thisDate,
        orders: state.orders,
        status: state.status,
    }
}
const mapDispatchToProps = {
    getOrdersByDate,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar)
