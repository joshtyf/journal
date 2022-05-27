import React, { useContext } from "react";
import { MainScreenContext } from "./App";
export default function LandingScreen() {
  const { setMainScreenContext } = useContext(MainScreenContext);

  return (
    <div className="grid place-content-center text-center h-full border-2 border-opacity-50 shadow-md rounded-md border-gray-100 gap-y-2 py-10">
      <div className="text-3xl font-bold text-purple-400">Welcome!</div>
      <div
        className="rounded-md text-purple-400 p-2 hover:text-white hover:bg-purple-400 border-2 bg-white border-purple-400 cursor-pointer transition-colors ease-in-out"
        onClick={() => setMainScreenContext(null, "create")}
      >
        Create a new post
      </div>
    </div>
  );
}
