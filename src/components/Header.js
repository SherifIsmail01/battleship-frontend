import React, { Component } from 'react';
import AboutModal from './AboutModal';
import InstructionsModal from './InstructionsModal';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showAboutModal: false,
      showInstructionsModal: false
    }
    this.showAboutModal = this.showAboutModal.bind(this);
    this.showInstructionsModal = this.showInstructionsModal.bind(this);
    this.closeAboutModal = this.closeAboutModal.bind(this);
    this.closeInstructionsModal = this.closeInstructionsModal.bind(this);
  }

  showAboutModal() {
    this.setState({
      showAboutModal: true
    });
  }

  showInstructionsModal() {
    this.setState({
      showInstructionsModal: true
    });
  }

  closeAboutModal() {
    this.setState({
      showAboutModal: false
    });
  }

  closeInstructionsModal() {
    this.setState({
      showInstructionsModal: false
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <div className="row">
            <div className="col-12">
              <h1 className="App-title white-text">Battleship</h1>
            </div>
          </div>
          { this.state.showAboutModal ? <AboutModal close={ this.closeAboutModal }/> : null }
          { this.state.showInstructionsModal ? <InstructionsModal close={ this.closeInstructionsModal }/> : null }
          <div className="row">
            <div className="col-12 text-right">
              <button onClick={ this.showAboutModal } ref="about" className="btn btn-secondary btn-sm about-button">About</button>
              <button onClick={ this.showInstructionsModal } ref="instructions" className="btn btn-secondary btn-sm" >Instructions</button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
