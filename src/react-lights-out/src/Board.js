import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nRows: 5,
    nCols: 5,
    chanceLightStartsOn: 0.25,
  };

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    for (let y = 0; y < this.props.nRows; y += 1) {
      const row = [];
      for (let x = 0; x < this.props.nCols; x += 1) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { nCols, nRows } = this.props;
    let { board, hasWon } = this.state;
    let [y, x] = coord.split("-").map(Number);
    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
        board[y][x] = !board[y][x];
      }
    }

    function checkWinCondition() {
      hasWon = board.every((row) => row.every((cell) => cell === false));
    }

    // TODO: flip this cell and the cells around it
    flipCell(y, x);
    flipCell(y + 1, x);
    flipCell(y - 1, x);
    flipCell(y, x + 1);
    flipCell(y, x - 1);

    // win when every cell is turned off
    // TODO: determine is the game has been won
    checkWinCondition();

    this.setState({ board, hasWon });
  }

  /** Render game board or winning message. */

  render() {
    const tblBoard = [];
    for (let y = 0; y < this.props.nRows; y += 1) {
      const row = [];
      for (let x = 0; x < this.props.nCols; x += 1) {
        const coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            coord={coord}
            isLit={this.state.board[y][x]}
            handleCell={this.flipCellsAround}
          />
        );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }

    return !this.state.hasWon ? (
      <table className="Board">
        <tbody>{tblBoard}</tbody>
      </table>
    ) : (
      <h1>You win</h1>
    );
    // if the game is won, just show a winning msg & render nothing else
    // TODO
    // make table board
    // TODO
  }
}

export default Board;
