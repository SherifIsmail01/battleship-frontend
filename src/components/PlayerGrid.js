import React, { Component } from 'react';

class PlayerGrid extends Component {
  constructor() {
    super();
    this.state = {
      board : [[]],
      game_finished: false,
      outcome: ''
    }
    this.onBoxClick = this.onBoxClick.bind(this);
    this.opponentGuess = this.opponentGuess.bind(this);
  }

  componentWillMount() {
    let gameBoard = [];
    for(let i = 0; i < 10; i++) {
      let gameRow = new Array(10);
      gameRow.fill(0)
      gameBoard.push(gameRow)
    }
    this.setState({
      board: gameBoard,
    })
  }

  onBoxClick(row, column) {
    if(!this.props.gameStarted) {
      let copiedBoard = this.state.board.slice();
      copiedBoard[row][column] = 'aqua'
      this.setState({
        board: copiedBoard,
      });
    }
  }
  
  opponentGuess() {
   console.log("opponentGuess");
   let currentGameID = this.props.gameIdFromGamePage;
   fetch(`${process.env.REACT_APP_BACKEND_URL}/api/games/${currentGameID}`, {
     method: 'PUT',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       computerPlay: true
     })
   }).then((res) => {
     return res.json();
   }).then((response) => {
       let copiedBoard = this.state.board.slice();
       if(response[1] === "match") {
         let matchIdx = response[0];
         copiedBoard[matchIdx[0]][matchIdx[1]] = 'red'
       } else {
         copiedBoard[response[0]][response[1]] = 'gray'
       }
         this.setState({
           board: copiedBoard,
         });
   });

   fetch(`${process.env.REACT_APP_BACKEND_URL}/api/games/${currentGameID}`)
     .then((res) => {
       return res.json(); // res cannot be read, need to convert to json
     }).then((json) => {
       if (json.p2_hits >= 16) {
         let message = "You lose!";
         this.props.isGameFinished(message)

       } else {
         console.log(json.p1_hits);
         console.log(json.p2_hits);
       }
    })
 }

  render() {
    return (
      <div id="your-gameboard" className="gameboard">
          {this.state.board.map((oneRow, rowIdx) => {
            return( <div key={ rowIdx } className='row justify-content-center'>
              {
                oneRow.map((oneSquare, colIdx) => {
                  return( <div key={ colIdx } className='col-1 square' style={ {backgroundColor: oneSquare }} onClick={ () => {this.onBoxClick(rowIdx, colIdx); this.props.sendBoxClick(rowIdx, colIdx)} }></div> )
                })
              }
	            </div>)
	          })
	        }
	    </div>
    );
  }
}

export default PlayerGrid
