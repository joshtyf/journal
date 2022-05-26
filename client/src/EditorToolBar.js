import {
  faBold,
  faFloppyDisk,
  faItalic,
  faLink,
  faStrikethrough,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function EditorToolBar({ onSaveClick }) {
  return (
    <div className="flex justify-between items-center bg-purple-100 shadow-md p-3 rounded-md">
      <div className="flex gap-x-2">
        <button className="bg-white rounded-lg p-2 text-gray-400 hover:text-gray-500">
          <FontAwesomeIcon icon={faBold} />
        </button>
        <button className="bg-white rounded-lg p-2 text-gray-400 hover:text-gray-500">
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button className="bg-white rounded-lg p-2 text-gray-400 hover:text-gray-500">
          <FontAwesomeIcon icon={faUnderline} />
        </button>
        <button className="bg-white rounded-lg p-2 text-gray-400 hover:text-gray-500">
          <FontAwesomeIcon icon={faStrikethrough} />
        </button>
        <button className="bg-white rounded-lg p-2 text-gray-400 hover:text-gray-500">
          <FontAwesomeIcon icon={faLink} />
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
