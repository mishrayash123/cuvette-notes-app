import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Notes from "./components/Notes";
import Sidebar from "./components/Sidebar";
import NotesModal from "./components/NotesModal";

function App() {
  const [isPhone, setIsPhone] = useState(false);
  const [display, setDisplay] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const [noteActive, setNoteActive] = useState(false);
  const [noteGroups, setNoteGroups] = useState(
    localStorage.getItem("noteGroups")
      ? JSON.parse(localStorage.getItem("noteGroups"))
      : []
  );
  const [newNoteGroup, setNewNoteGroup] = useState({
    id: "",
    name: "",
    notes: [],
    color: "",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className=" App flex flex-row">
        <Sidebar
          display={display}
          setDisplay={setDisplay}
          isPhone={isPhone}
          setNoteActive={setNoteActive}
          noteGroups={noteGroups}
          setSelectedNote={setSelectedNote}
          selectedNote={selectedNote}
        />

        <Notes
          display={display}
          setDisplay={setDisplay}
          selectedNote={selectedNote}
          isPhone={isPhone}
          noteActive={noteActive}
        />
      </div>

      <NotesModal
        noteActive={noteActive}
        setNoteActive={setNoteActive}
        noteGroups={noteGroups}
        setNewNoteGroup={setNewNoteGroup}
        setNoteGroups={setNoteGroups}
      />
    </>
  );
}

export default App;
