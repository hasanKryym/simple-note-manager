"use client";
import NoteForm from "@/components/NoteForm/NoteForm";
import { useNotes } from "@/context/NoteContext";
import { useEffect, useState } from "react";

export default function EditNote({ params }) {
  const { noteId } = params;
  const { getNoteById } = useNotes();
  const [note, setNote] = useState({});

  useEffect(() => {
    setNote(getNoteById(noteId));
  }, []);
  return (
    <>
      <NoteForm note={note} />
    </>
  );
}
