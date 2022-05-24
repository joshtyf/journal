import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

export default function MyEditor() {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty();
  });

  return (
    <div className="shadow-md border-2 p-2">
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Start typing here..."
      />
    </div>
  );
}
