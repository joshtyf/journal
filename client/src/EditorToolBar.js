import React, { useRef } from "react";

export default function EditorToolBar({ onSaveClick }) {
  const textInputRef = useRef(null);

  const handleSaveClick = () => {
    const title = textInputRef.current.value;
    onSaveClick(title);
  };

  return (
    <div className="flex justify-between items-center bg-blue-100 shadow-md p-2">
      <div>
        <button className="bg-gray-200 rounded-md p-2">Bold</button>
      </div>
      <div className="shadow-md">
        <input
          type="text"
          placeholder="Title"
          className="p-2 rounded-md"
          ref={textInputRef}
        />
      </div>
      <div>
        <button
          className="bg-blue-400 rounded-md p-2"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
}
