import React from "react";

export default function EditorToolBar({ onSaveClick }) {
  return (
    <div className="flex justify-between items-center bg-blue-100 shadow-md p-2">
      <div>
        <button className="bg-gray-200 rounded-md p-2">Bold</button>
      </div>
      <div>
        <button className="bg-blue-400 rounded-md p-2" onClick={onSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
