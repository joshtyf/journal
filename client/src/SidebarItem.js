import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function SidebarItem({ post, selectPost }) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setFocused(true)}
      onMouseLeave={() => setFocused(false)}
    >
      <div
        key={post.id}
        className="shadow-md border-l-8 border-red-500 p-2 cursor-pointer hover:border-red-700 rounded-l-lg min-w-full"
        onClick={() => selectPost(post.id)}
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
          onClick={() => console.log("clicked")}
        />
        <FontAwesomeIcon
          className="cursor-pointer hover:text-yellow-400"
          icon={faPenToSquare}
          onClick={() => console.log("clicked")}
        />
        <FontAwesomeIcon
          className="cursor-pointer hover:text-red-400"
          icon={faTrash}
          onClick={() => console.log("clicked")}
        />
      </div>
    </div>
  );
}
