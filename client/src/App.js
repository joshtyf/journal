import "./index.css";
import Sidebar from "./Sidebar";
import { createContext, useState } from "react";
import Reader from "./Reader";

export const MainScreenContext = createContext();

export default function App() {
  const [mainScreenComponent, setMainScreenComponent] = useState(null);

  const changeMainScreen = (postId, mode) => {
    fetch(`/api/${postId}`)
      .then((res) => res.json())
      .then((res) => {
        if (mode === "view") {
          setMainScreenComponent(<Reader post={res} />);
        }
      });
  };

  return (
    <div className="p-4 flex space-x-2">
      <div className="w-1/12 border-r-2">
        <MainScreenContext.Provider value={changeMainScreen}>
          <Sidebar />
        </MainScreenContext.Provider>
      </div>
      <div className="w-11/12">{mainScreenComponent || "Select a post"}</div>
    </div>
  );
}
