import React, { Component, Fragment } from "react";
import Cookie from "js-cookie";
import moment from "moment";

// import style from './style.module.scss'
import UserMain from "../../layouts/UserMain";
import CalendarCard from "../CalendarCard";
import NoResults from "../NoResults";
import Loading from "../Loading";



class Calendar extends Component {
    constructor(props) {
        super(props);

        let dateString = props.match.params.date
            ? props.match.params.date
            : moment().format("YYYY-MM-DD");

        this.state = {
            // openDetail: false,
            // rowDetail: null,
            dateString,
            orders: [],
            status: "loading",
        };
    }

    getData = () => {
        const endpoint = `${process.env.REACT_APP_API_ENDPOINT}orders?date=${this.state.dateString}`;
        const bearer = Cookie.get("auth-token");
        fetch(endpoint, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${bearer}`,
            },
        })
            .then(response => response.json())
            .then(response => {
                console.log(response.data);
                this.setState({
                    orders: response.data,
                    status: "done",
                });
            })
            .catch(error => {
                console.warn(error);
                this.props.history.push("/login");
            });
    };

    // handleRowClick = (row) => {
    //     //console.log(row.id);
    //     this.setState({
    //         openDetail: true,
    //         rowDetail: row
    //     })
    // }

    handleDateChange = date => {
        let newDate = moment(date).format("YYYY-MM-DD");

        this.setState({
            status: "loading",
            dateString: newDate,
        });

        this.props.history.push(`/calendar/${newDate}`);
    };

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.dateString !== this.state.dateString) {
            this.getData();
        }
    }
    
    handleOpenFilters = (open = true) => {
        this.setState({
            openFilters: open,
        })
    }

    renderCalendar = () => {
        if (this.state.status === "loading") return <Loading />;
        if (this.state.orders.length === 0) return <NoResults />;

        return (
            <Fragment>
                { 
                    this.state.orders.map(item => (
                        <CalendarCard key={item._id} data={item} />
                    )) 
                }
            </Fragment>
        );
    };

    render() {
        return (
            <UserMain
                openDetail={this.state.openDetail}
                dateString={this.state.dateString}
                onDateChange={this.handleDateChange}
                handleOpenFilters = {this.handleOpenFilters}                 
            >
                {this.renderCalendar()}
            </UserMain>
        );
    }
}

export default Calendar;
