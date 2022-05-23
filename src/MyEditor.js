import { Editor, EditorState } from "draft-js";
import React, { useState } from "react";
import "draft-js/dist/Draft.css";
import { RichUtils } from "draft-js";
import { convertToRaw } from "draft-js";
import { convertFromRaw } from "draft-js";
import EditorToolBar from "./EditorToolbar";

function MyEditor() {
  const [editorState, setEditorState] = useState(() => {
    const content = window.localStorage.getItem("rawContent");
    if (content) {
      return EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
    } else {
      return EditorState.createEmpty();
    }
  });

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    } else {
      return "not-handled";
    }
  };

  const saveContent = (title) => {
    console.log(`saving ${title}...`);

    const rawContent = convertToRaw(editorState.getCurrentContent());
    const data = {
      'title': title,
      'rawContent': rawContent
    }

    console.log(data);

    window.localStorage.setItem(
      "rawContent",
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
  };

  return (
    <div className="flex flex-col space-y-4">
      <EditorToolBar onSave={saveContent} />
      <div className="border-2">
        <Editor
          placeholder="Begin typing here..."
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  );
}

export default MyEditor;
