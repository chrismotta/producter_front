import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faListAlt, faCubes, faPrint, faScrewdriver, faTrashAlt, faPaperclip } from '@fortawesome/free-solid-svg-icons'

import UserMain from '../layouts/UserMain'
import CalendarCard from './CalendarCard'

library.add( faListAlt, faCubes, faPrint, faScrewdriver, faTrashAlt, faPaperclip );

class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // openDetail: false,
            // rowDetail: null,
            // thisDate: new Date(),
            orders: []
        };
    }

    getData = () => {
        // let endpoint = 'http://jazmeendeco.com.ar.ci5.toservers.com/api/?date='+date+'&limit='+limit;
        let endpoint = 'http://localhost:8000/api/orders?date=2018-12-07'

        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                console.log(response.data)
                this.setState({orders:response.data})
            })
            .catch(error => {
                console.warn(error)
            });
    }

    // handleRowClick = (row) => {
    //     //console.log(row.id);
    //     this.setState({
    //         openDetail: true,
    //         rowDetail: row
    //     })
    // }

    // handleDateChange = (date) => {
    //     this.setState({
    //         openDetail: false,
    //         thisDate: date
    //     })
    // }

    componentDidMount = () => {
        this.getData()
    }

    render() {
        return (
            <UserMain>
                {this.state.orders.map(item => (
                    <CalendarCard key={item._id} data={item}/>
                ))}
            </UserMain>
        );
    }
}

export default Calendar;
