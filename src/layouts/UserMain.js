import React, { Component, Fragment } from 'react';

import NavigationBar from '../components/NavigationBar';
import FooterDock from '../components/FooterDock';
import DetailDock from '../components/DetailDock';

class UserMain extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDetail: false,
            rowDetail: null,
            // thisDate: props.thisDate
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
        // this.setState({
        //     openDetail: false,
        //     thisDate: date
        // })
        this.props.onDateChange(date);

    }

    render() {
        return (
            <Fragment>
                <NavigationBar/>
                {this.props.children}
                <DetailDock openDock={this.state.openDetail} rowDetail={this.state.rowDetail} />
                <FooterDock dateString={this.props.dateString} onDateChange={this.handleDateChange} />
            </Fragment>
        );
    }
}

export default UserMain;
