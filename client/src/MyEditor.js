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
import { createPost, getPost, updatePost } from "./utils/api";
import Loading from "./Loading";

export default function MyEditor({ postId, newPost, onUpload }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [postTitle, setPostTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const { setMainScreenContext } = useContext(MainScreenContext);

  useEffect(() => {
    if (!newPost) {
      getPost(postId)
        .then((res) => res.json())
        .then((res) => {
          const content = res.content;
          const newEditorState = EditorState.createWithContent(
            convertFromRaw(JSON.parse(content))
          );
          setEditorState(newEditorState);
          setPostTitle(res.title);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      setLoading(false);
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
    const resPromise = newPost
      ? createPost(postTitle, content)
      : updatePost(postId, postTitle, content);
    resPromise
      .then((res) => res.json())
      .then((res) => {
        setMainScreenContext(res.id, "view");
        onUpload(res);
      })
      .catch((err) => console.log(err));
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="flex flex-col space-y-2">
      <EditorToolBar onSaveClick={saveData} />
      <div className="shadow-md border-2 border-opacity-50 border-gray-100 p-4 rounded-md">
        <div>
          <input
            className="font-bold text-xl focus:outline-none"
            type="text"
            placeholder="Enter your title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            autoFocus
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
