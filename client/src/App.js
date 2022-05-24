import MyEditor from "./MyEditor";
import "./index.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="p-4 flex space-x-2">
      <div className="w-1/12 border-r-2">
        <Sidebar />
      </div>
      <div className="w-11/12">
        <MyEditor />
      </div>
    </div>
  );
}

export default App;
