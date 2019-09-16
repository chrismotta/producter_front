import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faListAlt, faCubes, faPrint, faScrewdriver, faTrashAlt, faPaperclip } from '@fortawesome/free-solid-svg-icons';

import Grid from './Grid';
import NavigationBar from './NavigationBar';
import FooterDock from './FooterDock';
import DetailDock from './DetailDock';

library.add( faListAlt, faCubes, faPrint, faScrewdriver, faTrashAlt, faPaperclip );

class CalendarGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDetail: false,
            rowDetail: null,
            thisDate: new Date()
        };
    }

    handleRowClick = (row) => {
        //console.log(row.id);
        this.setState({
            openDetail: true,
            rowDetail: row
        })
    }

    handleDateChange = (date) => {
        this.setState({
            openDetail: false,
            thisDate: date
        })
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                <Grid onRowClick={this.handleRowClick} thisDate={this.state.thisDate} />
                <DetailDock openDock={this.state.openDetail} rowDetail={this.state.rowDetail} />
                <FooterDock thisDate={this.state.thisDate} onDateChange={this.handleDateChange} />
            </div>
        );
    }
}

export default CalendarGrid;
