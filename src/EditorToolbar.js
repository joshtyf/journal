import React, { useRef } from "react";

export default function EditorToolBar({ onSave }) {
  const textInputRef = useRef(null);

  const handleSaveClick = () => {
    const title = textInputRef.current.value;
    onSave(title);
  }

  return (
    <div className="flex justify-between items-center">
      <div className="">
        <button className="mr-2 p-2 bg-gray-200 rounded-md">Bold</button>
        <button className="mr-2 p-2 bg-gray-200 rounded-md">Italic</button>
      </div>

      <div>
        <input type="text" className="border-2" ref={textInputRef} placeholder="Title" />
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
