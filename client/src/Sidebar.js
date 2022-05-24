import React, { useEffect, useState } from "react";

export default function Sidebar() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="flex flex-col gap-y-2">
      <div className="font-medium">Journal</div>
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-100 p-2">{post.title}</div>
      ))}
    </div>
  );
}
