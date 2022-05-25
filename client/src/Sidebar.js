import React, { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ selectedPostId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [selectedPostId]);

  return (
    <div className="flex flex-col gap-y-2">
      <div className="font-bold text-xl">Journal App</div>
      {posts.map((post) => {
        return (
          <SidebarItem
            key={post.id}
            post={post}
            highlight={selectedPostId === post.id}
          />
        );
      })}
    </div>
  );
}
