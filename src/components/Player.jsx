import React, { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleClick() {
    setIsEditing(true);
  }
  function handleChange(event) {
    console.log(event.target.value);
    setPlayerName(event.target.value);
  }
  let editablePlayerName = isEditing ? (
    <input type="text" value={playerName} onChange={handleChange} required />
  ) : (
    <span className="player-name">{playerName}</span>
  );
  let btnCaption = isEditing ? "Save" : "Edit";
  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{btnCaption}</button>
    </li>
  );
}
