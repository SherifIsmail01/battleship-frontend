import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OutcomeModal extends Component {

  render() {
    return (
        <div className="modal fade show" style={{display: 'block'}}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <h2 className="display-3">{this.props.result}</h2>
              </div>
              <div className="modal-footer outcome-footer">
              <Link to={ '/' } className="btn btn-outline-success btn-lg text-center">Start New Game</Link>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default OutcomeModal;
