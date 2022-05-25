import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainScreenContext } from "./App";

import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function SidebarItem({ post }) {
  const [focused, setFocused] = useState(false);
  const changeMainScreen = useContext(MainScreenContext);

  return (
    <div
      className="relative"
      onMouseEnter={() => setFocused(true)}
      onMouseLeave={() => setFocused(false)}
    >
      <div
        key={post.id}
        className="shadow-md border-l-8 border-red-500 p-2 cursor-pointer hover:border-red-700 rounded-l-lg min-w-full"
      >
        {post.title}
      </div>
      <div
        className={`absolute inset-y-0 left-full bg-white z-10 rounded-r-lg shadow-md flex gap-x-3 items-center transition-all ease-in-out ${
          focused ? "p-2" : "w-0 overflow-hidden"
        }`}
      >
        <FontAwesomeIcon
          className="cursor-pointer hover:text-blue-400"
          icon={faEye}
          onClick={() => changeMainScreen(post.id, "view")}
        />
        <FontAwesomeIcon
          className="cursor-pointer hover:text-yellow-400"
          icon={faPenToSquare}
          onClick={() => changeMainScreen(post.id, "edit")}
        />
        <FontAwesomeIcon
          className="cursor-pointer hover:text-red-400"
          icon={faTrash}
          onClick={() => changeMainScreen(post.id, "delete")}
        />
      </div>
    </div>
  );
}
