import React, { useReducer } from "react";
import "./GameStyle.css";
import { calculatorWinner } from "./Winner";
import Board from "./Board";

const initState = {
  board: Array(9).fill(null),
  xIsNext: true,
  winner: null,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      if (state.winner || state.board[action.payload.index]) return state;
      const boardCopy = [...state.board];
      boardCopy[action.payload.index] = state.xIsNext ? "X" : "O";
      return {
        ...state,
        board: boardCopy,
        xIsNext: !state.xIsNext,
        winner: calculatorWinner(boardCopy),
      };
    }
    case "RESET": {
      return initState;
    }

    default:
      console.log("Vào defaul");
      break;
  }
};
const GameReducer = () => {
  const [state, dispatch] = useReducer(gameReducer, initState);

  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
      },
    });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick} />
      {state.winner && (
        <div className="game-winner">Winner is {state.winner}</div>
      )}
      <button className="game-reset" onClick={handleReset}>
        Reset game
      </button>
    </div>
  );
};

export default GameReducer;
