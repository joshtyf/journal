import MyEditor from "./MyEditor";
import "./index.css";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Reader from "./Reader";

function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  const selectPost = (post) => setSelectedPost(post);
  const deselectPost = () => setSelectedPost(null);

  return (
    <div className="p-4 flex space-x-2">
      <div className="w-1/12 border-r-2">
        <Sidebar selectPost={selectPost} />
      </div>
      <div className="w-11/12">
        {selectedPost ? (
          <Reader selectedPost={selectedPost} onClose={deselectPost} />
        ) : (
          <MyEditor />
        )}
      </div>
    </div>
  );
}

export default App;
