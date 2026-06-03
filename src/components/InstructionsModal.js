import React, { Component } from 'react';

class InstructionsModal extends Component {

  render() {
    return (
        <div className="modal fade show" style={{display: 'block'}}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Instructions</h5>
                <button type="button" className="close" onClick={ this.props.close }>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ol className="modal-text">
                  <li className="instructions">Place your ships by clicking squares on your gameboard.</li> 
                  <li className="instructions">After you have placed your ships, click the 'Start Game' button.</li> 
                  <li className="instructions">Click the enemy grid to make a guess.</li> 
                  <li className="instructions">After each guess, click the button below the grids to allow the opponent to guess your ship locations.</li> 
                  <li className="instructions">The first player to make 17 hits wins the game.</li> 
                </ol>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={ this.props.close }>Close</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default InstructionsModal;
