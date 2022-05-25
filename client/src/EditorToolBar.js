import { faBold, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function EditorToolBar({ onSaveClick }) {
  return (
    <div className="flex justify-between items-center bg-purple-100 shadow-md p-3 rounded-md">
      <button className="bg-white rounded-lg p-2 text-gray-400 hover:text-gray-500">
        <FontAwesomeIcon icon={faBold} />
      </button>
      <button
        className="bg-white rounded-lg p-2 text-purple-400 hover:text-purple-500"
        onClick={onSaveClick}
      >
        <FontAwesomeIcon icon={faFloppyDisk} />
      </button>
    </div>
  );
}
