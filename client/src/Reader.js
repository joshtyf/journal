import { convertFromRaw, Editor, EditorState } from "draft-js";
import React, { useState } from "react";

export default function Reader({ selectedPost, onClose }) {
  const [editorState, setEditorState] = useState(() => {
    const content = convertFromRaw(JSON.parse(selectedPost.content));
    return EditorState.createWithContent(content);
  });

  const [readOnly, setReadOnly] = useState(true);

  return (
    <div className="flex flex-col gap-y-2">
      <div className="self-end flex space-x-2">
        {readOnly ? (
          <button
            className="bg-green-400 rounded-md p-2"
            onClick={() => setReadOnly(false)}
          >
            Edit
          </button>
        ) : (
          <button
            className="bg-blue-400 rounded-md p-2"
            onClick={() => setReadOnly(true)}
          >
            Save
          </button>
        )}

        <button className="bg-red-400 rounded-md p-2" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="font-bold self-center">{selectedPost.title}</div>

      <div className="shadow-md p-2 rounded-md">
        <Editor
          editorState={editorState}
          readOnly={readOnly}
          onChange={setEditorState}
        />
      </div>
    </div>
  );
}