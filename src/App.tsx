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
      <div
        className="sm:w-1/3 w-1/2 h-dvh rounded-r-2xl 
      box-border bg-gray-700/10 z-999 "
      >
        <div className="flex last:ml-auto md:shrink-0 max-[600px]:justify-between">
          <img
            src={profilePictureDefault}
            className="rounded-full w-1/6 p-4 max-[600px]:w-1/3 max-[600px]:h-full"
            alt="profile"
          />
          <div className="w-4/5 p-4 max-[600px]:hidden  ">
            <p className="text-lg font-semibold ">Eric Ten Hag</p>
            <a href="">
              <p className="text-sm">Info account</p>
            </a>
          </div>
          <div
            className="bg-gray-800/10 rounded-full 
                          h-8 w-9 m-5 mt-7 relative right-30
                          hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 "
          >
            <button type="button" className=" rounded-full static ">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute bottom-1/4 left-1/4"
              />
            </button>
          </div>
        </div>

        <div className="rounded-r bg-red-100 h-auto overflow-auto scrollbar:hidden">
          <div className=" flex  justify-between ">
            <div className="flex-none w-15 rounded-full p-2">
              Pinned messages
            </div>
            <div className="flex-none  ">
              <FontAwesomeIcon icon={faThumbTack} className="w-10 mt-3" />
            </div>
          </div>
          <button
            className="flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <img
              src={profilePictureDefault}
              className="rounded-full w-1/6 p-4 max-[600px]:w-1/3 max-[600px]:h-full"
              alt="profile"
            />
            <div className="w-4/5 p-4 max-[600px]:hidden text-left ">
              <p className="text-lg font-semibold ">Eric Ten Hag</p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
          
          <button
            className="flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <img
              src={profilePictureDefault}
              className="rounded-full w-1/6 p-4 max-[600px]:w-1/3 max-[600px]:h-full"
              alt="profile"
            />
            <div className="w-4/5 p-4 max-[600px]:hidden text-left ">
              <p className="text-lg font-semibold ">Eric Ten Hag</p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
          <button
            className="flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <img
              src={profilePictureDefault}
              className="rounded-full w-1/6 p-4 max-[600px]:w-1/3 max-[600px]:h-full"
              alt="profile"
            />
            <div className="w-4/5 p-4 max-[600px]:hidden text-left ">
              <p className="text-lg font-semibold ">Eric Ten Hag</p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
          <button
            className="flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <img
              src={profilePictureDefault}
              className="rounded-full w-1/6 p-4 max-[600px]:w-1/3 max-[600px]:h-full"
              alt="profile"
            />
            <div className="w-4/5 p-4 max-[600px]:hidden text-left ">
              <p className="text-lg font-semibold ">Eric Ten Hag</p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
          <button
            className="flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <img
              src={profilePictureDefault}
              className="rounded-full w-1/6 p-4 max-[600px]:w-1/3 max-[600px]:h-full"
              alt="profile"
            />
            <div className="w-4/5 p-4 max-[600px]:hidden text-left ">
              <p className="text-lg font-semibold ">Eric Ten Hag</p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
          <button
            className="flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <img
              src={profilePictureDefault}
              className="rounded-full w-1/6 p-4 max-[600px]:w-1/3 max-[600px]:h-full"
              alt="profile"
            />
            <div className="w-4/5 p-4 max-[600px]:hidden text-left ">
              <p className="text-lg font-semibold ">Eric Ten Hag</p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
          <button
            className="flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <img
              src={profilePictureDefault}
              className="rounded-full w-1/6 p-4 max-[600px]:w-1/3 max-[600px]:h-full"
              alt="profile"
            />
            <div className="w-4/5 p-4 max-[600px]:hidden text-left ">
              <p className="text-lg font-semibold ">Eric Ten Hag</p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
          <button
            className="flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <img
              src={profilePictureDefault}
              className="rounded-full w-1/6 p-4 max-[600px]:w-1/3 max-[600px]:h-full"
              alt="profile"
            />
            <div className="w-4/5 p-4 max-[600px]:hidden text-left ">
              <p className="text-lg font-semibold ">Eric Ten Hag</p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
          <button
            className="flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <img
              src={profilePictureDefault}
              className="rounded-full w-1/6 p-4 max-[600px]:w-1/3 max-[600px]:h-full"
              alt="profile"
            />
            <div className="w-4/5 p-4 max-[600px]:hidden text-left ">
              <p className="text-lg font-semibold ">Eric Ten Hag</p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
          <button
            className="flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <img
              src={profilePictureDefault}
              className="rounded-full w-1/6 p-4 max-[600px]:w-1/3 max-[600px]:h-full"
              alt="profile"
            />
            <div className="w-4/5 p-4 max-[600px]:hidden text-left ">
              <p className="text-lg font-semibold ">Eric Ten Hag</p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
          <button
            className="flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <img
              src={profilePictureDefault}
              className="rounded-full w-1/6 p-4 max-[600px]:w-1/3 max-[600px]:h-full"
              alt="profile"
            />
            <div className="w-4/5 p-4 max-[600px]:hidden text-left ">
              <p className="text-lg font-semibold ">Eric Ten Hag</p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
          <button
            className="flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <img
              src={profilePictureDefault}
              className="rounded-full w-1/6 p-4 max-[600px]:w-1/3 max-[600px]:h-full"
              alt="profile"
            />
            <div className="w-4/5 p-4 max-[600px]:hidden text-left ">
              <p className="text-lg font-semibold ">Eric Ten Hag</p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
          <button
            className="flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <img
              src={profilePictureDefault}
              className="rounded-full w-1/6 p-4 max-[600px]:w-1/3 max-[600px]:h-full"
              alt="profile"
            />
            <div className="w-4/5 p-4 max-[600px]:hidden text-left ">
              <p className="text-lg font-semibold ">Eric Ten Hag</p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
