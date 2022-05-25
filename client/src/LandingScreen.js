import React, { useContext } from "react";
import { MainScreenContext } from "./App";
export default function LandingScreen() {
  const [, setMainScreenContext] = useContext(MainScreenContext);

  return (
    <div className="grid place-content-center text-center h-full border-2 gap-y-2 py-10">
      <div className="text-xl font-bold">Welcome!</div>
      <div
        className="rounded-md bg-purple-400 p-2 hover:bg-purple-500 hover:text-white cursor-pointer transition-colors ease-in-out"
        onClick={() => setMainScreenContext(null, "create")}
      >
        Create a new post
      </div>
    </div>
  );
}
