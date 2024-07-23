import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className=" w-full h-dvh ">
      <nav className="w-1/3 h-dvh box-border bg-gray-700/10 z-999 ">
        <div>i</div>

        <div className="rounded flex rounded-full justify-between bg-red-100">
          <div className="flex-none w-15 rounded-full p-2">Pinned messages</div>
          <div className="flex-none  ">
            <FontAwesomeIcon icon={faThumbTack} className="w-10 mt-3 " />
          </div>
        </div>
      </nav>
    </div>
  );
}
export default App;
