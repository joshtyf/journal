import { convertFromRaw, Editor, EditorState } from "draft-js";
import React, { useEffect, useState } from "react";

export default function Reader({ postId }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [postTitle, setPostTitle] = useState(null);
  const [postDate, setPostDate] = useState(null);

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
        const date = new Date(res.updated_at);
        setPostDate(date.toLocaleString());
      });
  }, [postId]);

  return (
    <div className="p-4 rounded-md shadow-md border-2 border-opacity-50 border-gray-100">
      <div className="flex justify-between">
        <div className="font-bold">{postTitle}</div>
        <div className="">Last updated: {postDate}</div>
      </div>

      <Editor editorState={editorState} readOnly />
    </div>
  );
}
