import React, { Component, Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faListAlt, faCubes, faPrint, faScrewdriver, faTrashAlt, faPaperclip } from '@fortawesome/free-solid-svg-icons';

import NavigationBar from '../components/NavigationBar';
import FooterDock from '../components/FooterDock';
import DetailDock from '../components/DetailDock';

library.add( faListAlt, faCubes, faPrint, faScrewdriver, faTrashAlt, faPaperclip );

class UserMain extends Component {

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
            <Fragment>
                <NavigationBar/>
                {this.props.children}
                <DetailDock openDock={this.state.openDetail} rowDetail={this.state.rowDetail} />
                <FooterDock thisDate={this.state.thisDate} onDateChange={this.handleDateChange} />
            </Fragment>
        );
    }
}

export default UserMain;
