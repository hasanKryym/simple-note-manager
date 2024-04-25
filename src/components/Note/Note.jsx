import React, { useState } from "react";
import { useNotes } from "@/context/NoteContext";
import "./Note.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import ConfirmationPopup from "../ConfirmationPopup/ConfirmationPopup";
import Link from "next/link";

export default function Note({ note }) {
  const { deleteNote } = useNotes();
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  const handleDeleteNote = () => {
    setShowConfirmationPopup(true);
  };

  const handleConfirmDelete = () => {
    deleteNote(note.id);
    setShowConfirmationPopup(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmationPopup(false);
  };

  return (
    <>
      <div className="note">
        <Link className="view_note-link" href={`/notes/view/${note.id}`}>
          <div>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
          </div>
        </Link>
        <div className="actions">
          <Link href={`/notes/edit/${note.id}`}>
            <FaEdit className="edit-icon" />
          </Link>
          <FaTrash onClick={handleDeleteNote} className="delete-icon" />
        </div>
      </div>
      {showConfirmationPopup && (
        <ConfirmationPopup
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
}
