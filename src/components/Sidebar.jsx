import React from "react";
import "../styles/Sidebar.css";

const Sidebar = ({
  setNoteActive,
  noteGroups,
  setSelectedNote,
  selectedNote,
  isPhone,
  display,
  setDisplay,
}) => {
  
  const handleSelect = (note) => {
    if (isPhone) {
      setDisplay(true);
    }
    setSelectedNote(note);
  };

  return (
    <div
      className="sidebar"
      style={{ display: isPhone && display ? "none" : "" }}
    >
      <div className="sidebarHeading ">
        <p className="sidebarTitle">Pocket Notes</p>        
      </div>      
      <div className="sidebarNotesList">
        <div className="notesList"> 
        {noteGroups &&
          noteGroups.map((note, index) => {
            const notes = note.name.split(" ");
            const firstLetters = notes.map((word) => word.charAt(0));
            return (
              <div
                className={`noteElement flex flex-row  justify-start ${
                  note.id === selectedNote.id ? "selectedNote" : ""
                }`}
                key={index}
                onClick={() => handleSelect(note)}
              >
                <div
                  className="ellipse listIcon flex"
                  style={{ marginRight: "0.5rem", backgroundColor: note.color }}
                >
                  {firstLetters[0]}
                  {firstLetters[firstLetters.length - 1]}
                </div>
                <p>{note.name}</p>
              </div>              
            );
          })}         
        </div>
        <button className="createNotes ellipse" onClick={() => setNoteActive(true)}>+</button>
      </div>
    </div>
  );
};

export default Sidebar;
