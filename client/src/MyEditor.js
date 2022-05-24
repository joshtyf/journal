import React, { useState } from "react";
import { convertToRaw, Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import EditorToolBar from "./EditorToolBar";

export default function MyEditor() {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty();
  });

  const saveData = (title) => {
    const content = convertToRaw(editorState.getCurrentContent());
    const data = {
      title: title,
      content: content,
    };

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((res) => console.log(res));
  };

  return (
    <div className="flex flex-col space-y-2">
      <EditorToolBar onSaveClick={saveData} />
      <div className="shadow-md border-2 p-2">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          placeholder="Start typing here..."
        />
      </div>
    </div>
  );
}
