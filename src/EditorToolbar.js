import React from "react";

export default function EditorToolBar({handleSaveClick}) {
  return (
    <div className="flex justify-between">
      <div className="">
        <button className="mr-2 p-2 bg-gray-200 rounded-md">Bold</button>
        <button className="mr-2 p-2 bg-gray-200 rounded-md">Italic</button>
      </div>

      <div>
        <button
          className="p-2 bg-blue-400 rounded-md"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
}
