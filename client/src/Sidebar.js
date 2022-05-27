import React from "react";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ selectedPostId, posts }) {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="font-bold text-xl text-purple-400">Journal App</div>
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
