import React from "react";
import "./ConfirmationPopup.css";

export default function ConfirmationPopup({ onCancel, onConfirm }) {
  return (
    <>
      <div className="popup">
        <div className="popup-content">
          <p>Are you sure you want to delete this note?</p>
          <div className="buttons">
            <button onClick={() => onCancel()}>Cancel</button>
            <button onClick={() => onConfirm()}>Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
}
