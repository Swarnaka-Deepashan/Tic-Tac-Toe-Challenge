import React, { useState } from "react";

const initialGameBoard = [ [null, null, null], [null, null, null], [null, null, null] ];

export default function Gameboard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handleSquareSelect(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ]; //taking a copy of the existing gameboard
      updatedBoard[rowIndex][colIndex] = "X";
      return updatedBoard; //returning the updated board
    });
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSquareSelect(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
