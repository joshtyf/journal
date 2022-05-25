import React, { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ selectPost }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="flex flex-col gap-y-2">
      <div className="font-medium">Journal</div>
      {posts.map((post) => (
        <SidebarItem key={post.id} post={post} />
      ))}
    </div>
  );
}
