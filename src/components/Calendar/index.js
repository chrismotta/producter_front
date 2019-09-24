import React, { Component, Fragment } from "react";
import { connect } from "react-redux"
import moment from "moment";

import UserMain from "../../layouts/UserMain";
import CalendarCard from "../CalendarCard";
import NoResults from "../NoResults";
import { getOrdersByDate } from '../../actions'

class Calendar extends Component {

    handleDateChange = date => {
        
        let dateString = moment(date).format("YYYY-MM-DD");
        this.props.getOrdersByDate({dateString});
        this.props.history.push(`/calendar/${dateString}`);
    };

    componentDidMount() {

        let dateString = this.props.match.params.date
            ? this.props.match.params.date
            : moment().format("YYYY-MM-DD");
        
        this.props.getOrdersByDate({dateString: dateString});        
    }

    handleOpenFilters = (open = true) => {
        this.setState({
            openFilters: open,
        })
    }

    renderCalendar = () => {
        if (this.props.status === "loading") {
            return [1,2,3].map(item => <CalendarCard key={item} data={{}} />);
        }
        if (this.props.orders.length === 0) return <NoResults />;

        return (
            <Fragment>
                { 
                    this.props.orders.map(item => (
                        <CalendarCard key={item._id} data={item} />
                    )) 
                }
            </Fragment>
        );
    };

    render() {
        return (
            <UserMain
                dateString={this.props.thisDate}
                onDateChange={this.handleDateChange}
                handleOpenFilters = {this.handleOpenFilters}
            >
                {this.renderCalendar()}
            </UserMain>
        );
    }
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
  

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
