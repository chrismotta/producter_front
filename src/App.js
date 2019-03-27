import React, { Component } from 'react';
import Grid from './components/Grid';
import NavigationBar from './components/NavigationBar';
import FooterDock from './components/FooterDock';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import "react-datepicker/dist/react-datepicker.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <NavigationBar/>
                <Grid/>
                <FooterDock/>
            </div>
        );
    }
}

export default App;
