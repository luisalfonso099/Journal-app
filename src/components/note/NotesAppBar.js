import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";
const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const handleSave = () => {
    dispatch(startSaveNote(active));
  };
  const hadlePictureClick = () => {
    document.querySelector(`#fileSelector`).click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };
  return (
    <div className="notes__appbar">
      <input
        onChange={handleFileChange}
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
      />

      <div>
        <button onClick={hadlePictureClick} className="btn">
          Add Picture
        </button>
        <button onClick={handleSave} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
