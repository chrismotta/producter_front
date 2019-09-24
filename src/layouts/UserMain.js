import React, { Component, Fragment } from 'react';
import NavigationBar from '../components/NavigationBar';
import FooterDock from '../components/FooterDock';
import DetailDock from '../components/DetailDock';
import FiltersDock from '../components/FiltersDock';

class UserMain extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDetail: false,
            openFilters: false,
            rowDetail: null,
        };
    }

    handleOpenDetail = (open = true, row = null) => {
        this.setState({
            openFilters: false,
            openDetail: open,
            // rowDetail: row
        })
    }

    handleOpenFilters = (open = true) => {
        this.setState({
            openDetail: false,
            openFilters: open,
        })
        // this.props.handleOpenFilters(open)
    }

    handleDateChange = (date) => {
        this.setState({
            openDetail: false,
        })
        this.props.onDateChange(date);
    }

    render() {
        return (
            <Fragment>
                <NavigationBar 
                    handleOpenDetail = {this.handleOpenDetail} 
                    handleOpenFilters = {this.handleOpenFilters} 
                />
                {this.props.children}
                <DetailDock
                    handleOpen = {this.handleOpenDetail} 
                    openDock = {this.state.openDetail}
                    rowDetail = {this.state.rowDetail}
                />
                <FiltersDock
                    handleOpen={this.handleOpenFilters}
                    openDock={this.state.openFilters}
                    handleGetData = {this.props.handleGetData}
                />
                {
                    this.props.dateString &&
                    <FooterDock
                        dateString = {this.props.dateString}
                        onDateChange = {this.handleDateChange}
                        />
                }
            </Fragment>
        );
    }
}

export default UserMain;
