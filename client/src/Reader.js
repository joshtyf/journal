import { convertFromRaw, Editor, EditorState } from "draft-js";
import React, { useEffect, useState } from "react";

export default function Reader({ post }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [postTitle, setPostTitle] = useState(null);

  useEffect(() => {
    const content = post.content;
    const newEditorState = EditorState.createWithContent(
      convertFromRaw(JSON.parse(content))
    );
    setEditorState(newEditorState);
    setPostTitle(post.title);
  }, [post]);

  return (
    <div className="shadow-md border-2 p-2">
      <div className="font-bold">{postTitle}</div>
      <Editor editorState={editorState} readOnly o />
    </div>
  );
}
