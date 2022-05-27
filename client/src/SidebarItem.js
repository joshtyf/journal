import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainScreenContext } from "./App";

import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { deletePost } from "./utils/api";

export default function SidebarItem({ post, highlight }) {
  const [focused, setFocused] = useState(false);
  const { deleteFromPosts, setMainScreenContext } = useContext(MainScreenContext);

  const handleDelete = () => {
    deletePost(post.id)
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        setMainScreenContext(null, null);
        deleteFromPosts(post.id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setFocused(true)}
      onMouseLeave={() => setFocused(false)}
    >
      <div
        key={post.id}
        className={`shadow-md border-l-8 border-purple-400 p-2 cursor-pointer hover:border-purple-500 rounded-l-lg min-w-full transition-colors ease-in-out ${
          highlight ? "text-purple-400" : "text-black"
        }`}
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
          onClick={() => setMainScreenContext(post.id, "view")}
        />
        <FontAwesomeIcon
          className="cursor-pointer hover:text-yellow-400"
          icon={faPenToSquare}
          onClick={() => setMainScreenContext(post.id, "edit")}
        />
        <FontAwesomeIcon
          className="cursor-pointer hover:text-red-400"
          icon={faTrash}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}
