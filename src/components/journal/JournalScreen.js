import React from "react";
import NoteScreen from "../note/NoteScreen";
import NothingSelected from "./NothingSelected";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const JournalScreen = () => {
  const { active } = useSelector((state) => state.notes);

  return (
    <div className="journal__main-content  animate__animated animate__fadeIn">
      <input type="checkbox" id="btn-menu" />
      <label htmlFor="btn-menu">
        <div className="uno"></div>
        <div className="dos"></div>
        <div className="tres"></div>
      </label>
      <Sidebar />

      <main>{active ? <NoteScreen /> : <NothingSelected />}</main>
    </div>
  );
};

export default JournalScreen;
