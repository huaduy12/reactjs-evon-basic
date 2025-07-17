import React, { useState } from "react";
import Board from "./Board";
import { calculatorWinner } from "./Winner";
import "./GameStyle.css";

const Game = () => {
  // tạo một bàn cờ 9 ô
  // const [board, setBoard] = useState(Array(9).fill(null));
  // tạo một biến kiểm tra xem vị trí click vào bàn cờ là X hay O, mặc định đánh đầu tiên là X
  // const [xIsNext, setXIsNext] = useState(true);

  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
    name: "duy",
  });
  const winner = calculatorWinner(state.board);
  const handleClick = (index) => {
    console.log("index: " + index);

    // copy ra mảng mới để điền lại X,O
    const boardCopy = [...state.board];
    console.log("Copy đầu: " + boardCopy);

    if (winner || boardCopy[index]) return;
    boardCopy[index] = state.xIsNext ? "X" : "O";
    // setBoard(boardCopy);
    // set lại trạng thái cho ô tiếp theo
    // setXIsNext(!xIsNext);
    setState({
      ...state,
      board: boardCopy,
      xIsNext: !state.xIsNext,
    });
    console.log("Copy cuối: " + boardCopy);
    console.log(state);
  };
  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
    setState({
      board: Array(9).fill(null),
      xIsNext: true,
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
