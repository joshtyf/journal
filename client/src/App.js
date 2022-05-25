import "./index.css";
import Sidebar from "./Sidebar";
import { createContext, useState } from "react";
import Reader from "./Reader";
import MyEditor from "./MyEditor";
import LandingScreen from "./LandingScreen";

export const MainScreenContext = createContext();

export default function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [mode, setMode] = useState(null);

  const setMainScreenContext = (postId, mode) => {
    setSelectedPostId(postId);
    setMode(mode);
  };

  return (
    <MainScreenContext.Provider
      value={[[selectedPostId, mode], setMainScreenContext]}
    >
      <div className="p-4 flex space-x-2">
        <div className="w-1/6 border-r-2">
          <Sidebar selectedPostId={selectedPostId}/>
        </div>
        <div className="w-5/6">
          {mode === "view" ? (
            <Reader postId={selectedPostId} />
          ) : mode === "edit" ? (
            <MyEditor postId={selectedPostId} newPost={false} />
          ) : mode === "create" ? (
            <MyEditor newPost={true} />
          ) : (
            <LandingScreen />
          )}
        </div>
      </div>{" "}
    </MainScreenContext.Provider>
  );
}
