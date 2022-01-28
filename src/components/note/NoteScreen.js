import React, { useEffect, useRef } from "react";
import NotesAppBar from "./NotesAppBar";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { activeNote, startDeleting } from "../../actions/notes";

const NoteScreen = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);

  const { body, title, id } = formValues;
  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);
  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);
  const handleDelete = () => {
    dispatch(startDeleting(id));
  };
  return (
    <div className="note__main-content">
      <NotesAppBar />
      <div className="note__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="note__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
          name="title"
        />
        <textarea
          placeholder="What happened today"
          className="note__textarea"
          autoComplete="off"
          value={body}
          onChange={handleInputChange}
          name="body"
        ></textarea>
        {note.url && (
          <div className="note__image">
            <img alt="imagen" src={note.url} />
          </div>
        )}
      </div>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

export default NoteScreen;
