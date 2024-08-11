import React, { useState } from "react";
import "../styles/NoteInputBox.css";

const NoteInputBox = ({ id, handleNewNote }) => {
  const [note, setNote] = useState("");
  const [disableBtn, setDisableBtn] = useState(true);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setNote(value);
    setDisableBtn(value.trim() === ""); 
  };

  const handleSendClick = () => {
    const newNote = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 
      content: note,
      id: Math.floor(Math.random() * 1000),
    };
    handleNewNote(newNote);
    let notesGroup = JSON.parse(localStorage.getItem("noteGroups")) || [];
    const groupIndex = notesGroup.findIndex((group) => group.id === id);
    notesGroup[groupIndex].notes.push(newNote);
    localStorage.setItem("noteGroups", JSON.stringify(notesGroup));
    setNote("");
    setDisableBtn(true); 
  };

  return (
    <div className="inputContainer">
      <div className="inputBoxContainer flex flex-row">
        <textarea
          name="note"
          cols="30"
          rows="6"
          className="inputBox"
          placeholder="Enter your text here..........."
          onChange={handleInputChange}
          value={note}
        ></textarea>
        <button
          className="sendBtn"
          disabled={disableBtn}
          onClick={handleSendClick}
        >
          <svg
            width="25"
            height="29"
            viewBox="0 0 35 29"
            fill="#ABABAB"
            xmlns="http://www.w3.org/2000/svg"
            
          >
            <path
              d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NoteInputBox;
