import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <div className="grid place-content-center min-h-full">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
