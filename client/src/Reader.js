import { convertFromRaw, Editor, EditorState } from "draft-js";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { getPost } from "./utils/api";

export default function Reader({ postId }) {
  const [post, setPost] = useState({
    title: null,
    updated_at: null,
    content: EditorState.createEmpty(),
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPost(postId)
      .then((res) => res.json())
      .then((res) => {
        const { title, content, updated_at } = res;
        const newEditorState = EditorState.createWithContent(
          convertFromRaw(JSON.parse(content))
        );

        setPost({
          title: title,
          content: newEditorState,
          updated_at: new Date(updated_at).toLocaleString(),
        });

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [postId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="p-4 rounded-md shadow-md border-2 border-opacity-50 border-gray-100">
          <div className="flex justify-between">
            <div className="font-bold text-xl">{post.title}</div>
            <div className="">Last updated: {post.updated_at}</div>
          </div>
          <Editor editorState={post.content} readOnly />
        </div>
      )}
    </>
  );
}
