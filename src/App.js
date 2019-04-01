import React, { Component } from 'react';
import Grid from './components/Grid';
import NavigationBar from './components/NavigationBar';
import FooterDock from './components/FooterDock';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import "react-datepicker/dist/react-datepicker.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faListAlt, faCubes, faPrint, faScrewdriver, faTrashAlt, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import DetailDock from './components/DetailDock';

library.add( faListAlt, faCubes, faPrint, faScrewdriver, faTrashAlt, faPaperclip );

class App extends Component {

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
            <div className="App">
                <NavigationBar/>
                <Grid onRowClick={this.handleRowClick} thisDate={this.state.thisDate} />
                <DetailDock openDock={this.state.openDetail} rowDetail={this.state.rowDetail} />
                <FooterDock thisDate={this.state.thisDate} onDateChange={this.handleDateChange} />
            </div>
        );
    }
}

export default App;
