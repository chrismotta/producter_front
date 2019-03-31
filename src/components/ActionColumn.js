import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faPaperclip, faTrashAlt, faMinusSquare } from '@fortawesome/free-solid-svg-icons';


class ActionColumn extends Component {
    render() {
      return (
            <span>
                <div>
                    <Button onClick={this.props.onClick} variant="outline-info" size="sm" className="icon-right-margin">
                        <FontAwesomeIcon icon={faPrint} />
                    </Button>
                    <Button onClick={this.props.onClick} variant="outline-info" size="sm" className="icon-right-margin">
                        <FontAwesomeIcon icon={faPaperclip} />
                    </Button>
                    <Button onClick={this.props.onClick} variant="outline-danger" size="sm" >
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                </div>
                {/* <div>
                    <Button onClick={this.props.onClickCollapse} variant="outline-danger" size="sm" >
                        <FontAwesomeIcon icon={faMinusSquare} />
                    </Button>
                </div> */}
            </span>
      );
    }
}

export default ActionColumn;