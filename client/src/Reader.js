import { convertFromRaw, Editor, EditorState } from "draft-js";
import React, { useEffect, useState } from "react";

export default function Reader({ postId }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [postTitle, setPostTitle] = useState(null);

  useEffect(() => {
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
  }, [postId]);

  return (
    <div className="shadow-md border-2 p-2">
      <div className="font-bold">{postTitle}</div>
      <Editor editorState={editorState} readOnly />
    </div>
  );
}
