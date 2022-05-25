import React, { useContext, useEffect, useState } from "react";
import {
  convertFromRaw,
  convertToRaw,
  Editor,
  EditorState,
  RichUtils,
} from "draft-js";
import "draft-js/dist/Draft.css";
import EditorToolBar from "./EditorToolBar";
import { MainScreenContext } from "./App";

export default function MyEditor({ postId, newPost }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [postTitle, setPostTitle] = useState("");

  const [, setMainScreenContext] = useContext(MainScreenContext);

  useEffect(() => {
    if (!newPost) {
      fetch(`/api/${postId}`)
        .then((res) => res.json())
        .then((res) => {
          const content = res.content;
          const newEditorState = EditorState.createWithContent(
            convertFromRaw(JSON.parse(content))
          );
          setEditorState(newEditorState);
          setPostTitle(res.title);
        });
    }
  }, [postId, newPost]);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  const saveData = () => {
    const content = convertToRaw(editorState.getCurrentContent());
    const data = {
      title: postTitle,
      content: content,
    };

    if (!newPost) {
      data.id = postId;
      fetch(`/api/${postId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setMainScreenContext(postId, "view");
        });
    } else {
      fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          setMainScreenContext(res.id, "view");
        });
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <EditorToolBar onSaveClick={saveData} />
      <div className="shadow-md border-2 p-2">
        <div>
          <input
            className="font-bold text-xl"
            type="text"
            placeholder="Enter your title..."
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </div>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          placeholder="Start typing here..."
        />
      </div>
    </div>
  );
}
