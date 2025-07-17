import React from "react";

const Cell = (props) => {
  // console.log("Cell1" + props.onClick);
  return (
    <div className="game-cell" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;
