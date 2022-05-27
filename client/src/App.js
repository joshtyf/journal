import "./index.css";
import Sidebar from "./Sidebar";
import { createContext, useEffect, useState } from "react";
import Reader from "./Reader";
import MyEditor from "./MyEditor";
import LandingScreen from "./LandingScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { getPosts } from "./utils/api";
import Loading from "./Loading";

export const MainScreenContext = createContext();

export default function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [mode, setMode] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const setMainScreenContext = (postId, mode) => {
    setSelectedPostId(postId);
    setMode(mode);
  };

  useEffect(() => {
    getPosts()
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const updatePosts = (post) => {
    const temp = posts.filter((e) => e.id !== post.id);
    setPosts([post, ...temp]);
  };

  const deleteFromPosts = (id) => {
    setPosts(posts.filter((e) => e.id !== id));
  };

  return (
    <>
      {loading ? (
        <div className="h-screen">
          <Loading />
        </div>
      ) : (
        <MainScreenContext.Provider
          value={{ deleteFromPosts, setMainScreenContext }}
        >
          <div className="p-4 flex space-x-2">
            <div className="w-1/6 border-r-2">
              <Sidebar selectedPostId={selectedPostId} posts={posts} />
            </div>
            <div className="flex flex-col w-5/6">
              {mode !== null && (
                <div
                  className="self-end text-red-400 hover:text-red-500 transition-colors ease-in-out cursor-pointer"
                  onClick={() => setMainScreenContext(null, null)}
                >
                  <FontAwesomeIcon icon={faXmark} size="2x" />
                </div>
              )}
              {mode === "view" ? (
                <Reader postId={selectedPostId} />
              ) : mode === "edit" ? (
                <MyEditor
                  postId={selectedPostId}
                  newPost={false}
                  onUpload={updatePosts}
                />
              ) : mode === "create" ? (
                <MyEditor newPost onUpload={addPost} />
              ) : (
                <LandingScreen />
              )}
            </div>
          </div>{" "}
        </MainScreenContext.Provider>
      )}
    </>
  );
}
