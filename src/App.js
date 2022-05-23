import "./App.css";
import MyEditor from "./MyEditor";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <div className="">
        <div className="flex">
          <div className="w-1/12 border-2 border-red-100">
            <NavBar />
          </div>
          <div className="p-4 w-11/12 h-screen shadow">
              <MyEditor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
