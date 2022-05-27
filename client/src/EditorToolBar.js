import {
  faBold,
  faFloppyDisk,
  faItalic,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function EditorToolBar({ onSaveClick, onStyleSelect }) {
  return (
    <div className="flex justify-between items-center bg-purple-100 shadow-md p-3 rounded-md">
      <div className="flex gap-x-2">
        <button
          className="bg-white rounded-lg p-2 text-gray-400 hover:text-gray-500"
          onClick={() => onStyleSelect("BOLD")}
        >
          <FontAwesomeIcon icon={faBold} />
        </button>
        <button
          className="bg-white rounded-lg p-2 text-gray-400 hover:text-gray-500"
          onClick={() => onStyleSelect("ITALIC")}
        >
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button
          className="bg-white rounded-lg p-2 text-gray-400 hover:text-gray-500"
          onClick={() => onStyleSelect("UNDERLINE")}
        >
          <FontAwesomeIcon icon={faUnderline} />
        </button>
      </div>

      <button
        className="bg-white rounded-lg p-2 text-purple-400 hover:text-purple-500 transition-colors ease-in-out"
        onClick={onSaveClick}
      >
        <FontAwesomeIcon icon={faFloppyDisk} />
      </button>
    </div>
  );
}
