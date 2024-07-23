import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import profilePictureDefault from "../public/UI/images/profile-picture.webp";

import {
  faThumbTack,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className=" w-full h-dvh ">
      <nav className="w-1/3 h-dvh rounded-r-2xl box-border bg-gray-700/10 z-999 ">
        <div className="flex ">
          <img
            src={profilePictureDefault}
            className="rounded-full  w-1/6 p-4"
            alt="profile"
          />
          <div className="w-1/3 p-4 ">
            <p className="text-lg font-semibold">Host Account</p>
            <a href="">
              <p className="text-sm">Info Account</p>
            </a>
          </div>
          <div className=" bg-gray-800/10 rounded-full h-10 w-10 m-6 relative right-30 " >
            <button type="button" className=" rounded-full ">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute"
              />
            </button>
          </div>
        </div>

        <div className="rounded flex rounded-r-full justify-between bg-red-100">
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
