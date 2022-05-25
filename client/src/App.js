import "./index.css";
import Sidebar from "./Sidebar";
import { createContext, useState } from "react";
import Reader from "./Reader";
import MyEditor from "./MyEditor";

export const MainScreenContext = createContext();

export default function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [mode, setMode] = useState(null);

  const setMainScreenContext = (postId, mode) => {
    setSelectedPostId(postId);
    setMode(mode);
  };

  return (
    <div className="p-4 flex space-x-2">
      <div className="w-1/12 border-r-2">
        <MainScreenContext.Provider
          value={[[selectedPostId, mode], setMainScreenContext]}
        >
          <Sidebar />
        </MainScreenContext.Provider>
      </div>
      <div className="w-11/12">
        {mode === "view" ? (
          <Reader postId={selectedPostId} />
        ) : mode === "edit" ? (
          <MyEditor postId={selectedPostId} newPost={false} />
        ) : (
          "Select a post"
        )}
      </div>
    </div>
  );
}
