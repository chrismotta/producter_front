import es from 'date-fns/locale/es';
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import DatePicker from "react-datepicker";
import Dock from 'react-dock';
import Button from 'react-bootstrap/Button';

class FooterDock extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isVisibleFooter: false
        };
    }

    render() {
        return (
            <div>
                <Dock position='bottom' fluid={false} size={320} isVisible={this.state.isVisibleFooter}>
                    <div style={{padding:'20px'}}>
                        <Button 
                            variant="outline-info" 
                            className="float-right"
                            onClick={() => this.setState({ isVisibleFooter: !this.state.isVisibleFooter })}
                        >Cerrar</Button>
                        <DatePicker
                            inline
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            locale={es}
                            fixedHeight
                            monthsShown={3}
                            />
                    </div>
                </Dock>
                <Nav 
                    className="fixed-bottom justify-content-center" 
                    variant="tabs" 
                    defaultActiveKey="foot"
                >
                    <Nav.Item>
                        <Nav.Link 
                            className="bg-secondary text-white"
                            eventKey="foot"
                            onClick={() => this.setState({ 
                                isVisibleFooter: !this.state.isVisibleFooter 
                            })}
                        >Calendario</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}
  
export default FooterDock;