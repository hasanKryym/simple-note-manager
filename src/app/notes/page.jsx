"use client";
import { useNotes } from "@/context/NoteContext";
import Link from "next/link";
import Note from "@/components/Note/Note";
import "./notes.css";
import { IoIosAddCircle } from "react-icons/io";

export default function About() {
  const { notes } = useNotes();

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem",
        }}
      >
        <h1>
          My Notes{" "}
          <span>
            <Link className="link" href={"/notes/add"}>
              <IoIosAddCircle />
            </Link>
          </span>
        </h1>
      </div>

      <div className="notes_container">
        {notes.length !== 0 ? (
          notes.map((note) => {
            return <Note key={note.id} note={note} />;
          })
        ) : (
          <p>No notes</p>
        )}
      </div>
    </>
  );
}
