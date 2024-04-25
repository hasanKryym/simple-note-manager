"use client";
import { notificationStatuses } from "@/Enums/Notification/notificationStatus";
import { useNotes } from "@/context/NoteContext";
import { useNotification } from "@/context/NotificatioinContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./NoteForm.css";

export default function NoteForm({ note }) {
  const router = useRouter();
  const pathname = usePathname();
  const addNotePageLink = "/notes/add";
  const editNotePageLink = "/notes/edit";
  const viewNotePageLink = "/notes/view";

  const { addNotification } = useNotification();
  const { addNote, updateNote } = useNotes();
  const [noteData, setNoteData] = useState({
    id: note?.id ?? Math.random().toString(36).substring(2, 9),
    title: note?.title ?? "",
    description: note?.description ?? "",
  });

  useEffect(() => {
    if (note?.title) setNoteData(note);
  }, [note]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteData({ ...noteData, [name]: value });
  };

  const handleAddNote = (event) => {
    event.preventDefault();

    if (!noteData.title) return;
    addNote(noteData);

    setNoteData({ title: "", description: "" });
    addNotification("Note added", notificationStatuses.SUCCESS);
  };

  const handleEditNote = (event) => {
    event.preventDefault();
    if (
      noteData.title === note?.title &&
      noteData.description === note?.description
    )
      return;
    updateNote(noteData);
    addNotification("Note edited successfully", notificationStatuses.SUCCESS);
    router.replace("/notes");
  };

  return (
    <>
      <div className="add_note-form_container">
        <form
          className="form"
          onSubmit={
            pathname === addNotePageLink ? handleAddNote : handleEditNote
          }
        >
          <span className="title">
            {pathname === addNotePageLink && "Add new Note"}
            {pathname.includes(editNotePageLink) && "Edit Note"}
            {pathname.includes(viewNotePageLink) && note?.title}
          </span>

          {pathname.includes(viewNotePageLink) && <p>{note?.description}</p>}
          {(pathname.includes(editNotePageLink) ||
            pathname === addNotePageLink) && (
            <>
              <div>
                <label htmlFor="title">Title:</label>
                <input
                  className="input"
                  type="text"
                  id="title"
                  name="title"
                  value={noteData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="description">Description:</label>
                <textarea
                  className="input"
                  id="description"
                  name="description"
                  value={noteData.description}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          <div className="footer">
            <Link className="link" href={"/notes"}>
              {pathname === addNotePageLink ||
              pathname.includes(viewNotePageLink)
                ? "view notes"
                : "Cancel"}
            </Link>
            {(pathname.includes(editNotePageLink) ||
              pathname === addNotePageLink) && (
              <button className="button" type="submit">
                {pathname === addNotePageLink ? "Add" : "Edit"}
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
