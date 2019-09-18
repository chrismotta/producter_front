import React, { Component } from 'react'
// import style from './style.module.scss'

import UserMain from '../../layouts/UserMain'
import CalendarCard from '../CalendarCard'
import moment from 'moment'
import NoResults from '../NoResults'
import Loading from '../Loading'
import Cookie from "js-cookie"

class Calendar extends Component {
    constructor(props) {
        super(props);
        
        let dateString = props.match.params.date ?
            props.match.params.date :
            moment().format("YYYY-MM-DD")

        this.state = {
            // openDetail: false,
            // rowDetail: null,
            dateString,
            orders: [],
            status: 'loading'
        };
    }

    getData = () => {
        let endpoint = `http://localhost:8000/api/orders?date=${this.state.dateString}`
        let bearer = Cookie.get("auth-token")
        fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${bearer}`,
            }
          })
            .then(response => response.json())
            .then(response => {
                console.log(response.data)
                this.setState({
                    orders: response.data,
                    status: 'done'
                })
            })
            .catch(error => {
                console.warn(error)
                this.props.history.push("/login")
            });
    }

    // handleRowClick = (row) => {
    //     //console.log(row.id);
    //     this.setState({
    //         openDetail: true,
    //         rowDetail: row
    //     })
    // }

    handleDateChange = (date) => {
        
        let newDate = moment(date).format("YYYY-MM-DD")
        
        this.setState({
            status: 'loading',
            dateString: newDate
        })
        
        this.props.history.push(`/calendar/${newDate}`)
    }

    componentDidMount() {
        this.getData()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.dateString !== this.state.dateString) {
            this.getData()
        }
    }

    renderCalendar = () => {

        if(this.state.status === 'loading') return <Loading/>
        if(this.state.orders.length === 0) return <NoResults/>
        
        return this.state.orders.map(item => (
            <CalendarCard key={item._id} data={item}/>
        ))
    }
    render() {
        return (
            <UserMain dateString={this.state.dateString} onDateChange={this.handleDateChange} >
                {
                    this.renderCalendar()
                }
            </UserMain>
        );
    }
}

export default Calendar;
