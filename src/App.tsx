import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import profilePictureDefault from "../public/UI/images/profile-picture.webp";
import wallpaper from "../public/UI/images/ch.webp";
import {
  faThumbTack,
  faMagnifyingGlass,
  faMicrophone,
  faBars,
  faPaperclip,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="bg-[#faf9fe] w-full h-full p-2 grid grid-cols-4 gap-4 max-[850]:grid-cols-3 max-[850]:grid ">
      <div
        className="col-span-1 w-full rounded-2xl 
          box-border bg-[#ffffff] z-999"
      >
        <div className="flex last:ml-auto rounded-t-2xl  ">
          <div className="grid place-items-center w-1/6 m-2 max-[740px]:w-1/5 ">
            <img
              src={profilePictureDefault}
              className="rounded-full w-full "
              alt="profile"
            />
          </div>
          <div className="w-auto mr-auto p-4 max-[900px]:w-1/2 pt-6  ">
            <p className="text-sm font-semibold ">Eric Ten Hag</p>
            <a href="">
              <p className="text-sm">Info account</p>
            </a>
          </div>

          <div className="grid place-items-center">
            <button
              type="button"
              className="bg-gray-800/10 rounded-full relative
                          h-12 w-12 m-5 hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50"
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute bottom-1/3 left-1/3"
              />
            </button>
          </div>
        </div>
          <div className=" rounded-full m-auto w-11/12 bg-[#f7f7f7] flex justify-around">
            <button type="button" className="py-2 px-5 rounded-full bg-[f7f7f7] hover:bg-white active:bg-white">
              All
            </button>
            <button type="button" className="py-2 px-5 rounded-full bg-[f7f7f7] hover:bg-white active:bg-white">
              Personal
            </button>
            <button type="button" className="py-2 px-5 rounded-full bg-[f7f7f7] hover:bg-white active:bg-white">
              Groups
            </button>
            
          </div>
        <div className="rounded-2xl bg-[#ffffff] gap-1 ">
          <div className=" flex  justify-between ">
            <div className="flex-none w-15 rounded-full p-2">
              Pinned messages
            </div>
            <div className="flex-none  ">
              <FontAwesomeIcon icon={faThumbTack} className="w-10 mt-3" />
            </div>
          </div>

          <button
            className=" flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <div className="grid place-items-center w-1/6 h-full m-auto max-[600px]:w-1/4">
              <img
                src={profilePictureDefault}
                className=" rounded-full w-full h-full "
                alt="profile"
              />
            </div>
            <div className="w-4/5 p-4 pt-7 max-[500px]:hidden text-left ">
              <p className="text-lg font-semibold max[740]:text-xl">
                Eric Ten Hag
              </p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
          <button
            className=" flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <div className="grid place-items-center w-1/6 h-full m-auto max-[600px]:w-1/4">
              <img
                src={profilePictureDefault}
                className="  rounded-full w-full h-full "
                alt="profile"
              />
            </div>
            <div className="w-4/5 p-4 pt-7 max-[500px]:hidden text-left ">
              <p className="text-lg font-semibold max[740]:text-xl">
                Eric Ten Hag
              </p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
          <div className="flex-none w-15 rounded-full p-2">Messages</div>
          <button
            className=" flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <div className="grid place-items-center w-1/6 h-full m-auto max-[600px]:w-1/4">
              <img
                src={profilePictureDefault}
                className="  rounded-full w-full h-full "
                alt="profile"
              />
            </div>
            <div className="w-4/5 p-4 pt-7 max-[500px]:hidden text-left ">
              <p className="text-lg font-semibold max[740]:text-xl">
                Eric Ten Hag
              </p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>

          <button
            className=" flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <div className="grid place-items-center w-1/6 h-full m-auto max-[600px]:w-1/4">
              <img
                src={profilePictureDefault}
                className="  rounded-full w-full h-full "
                alt="profile"
              />
            </div>
            <div className="w-4/5 p-4 pt-7 max-[500px]:hidden text-left ">
              <p className="text-lg font-semibold max[740]:text-xl">
                Eric Ten Hag
              </p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>

          <button
            className=" flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <div className="grid place-items-center w-1/6 h-full m-auto max-[600px]:w-1/4">
              <img
                src={profilePictureDefault}
                className="  rounded-full w-full h-full "
                alt="profile"
              />
            </div>
            <div className="w-4/5 p-4 pt-7 max-[500px]:hidden text-left ">
              <p className="text-lg font-semibold max[740]:text-xl">
                Eric Ten Hag
              </p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
          <button
            className=" flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <div className="grid place-items-center w-1/6 h-full m-auto max-[600px]:w-1/4">
              <img
                src={profilePictureDefault}
                className="  rounded-full w-full h-full "
                alt="profile"
              />
            </div>
            <div className="w-4/5 p-4 pt-7 max-[500px]:hidden text-left ">
              <p className="text-lg font-semibold max[740]:text-xl">
                Eric Ten Hag
              </p>
              <a href="">
                <p className="text-sm">Info account</p>
              </a>
            </div>
          </button>
        </div>
      </div>
      <div className=" col-span-3 flex flex-col justify-between bg-[#fcfdff] rounded-2xl z-999 ">
        <div className="flex flex-row justify-start last:ml-auto border border-b-slate-600 rounded-t-2xl bg-[#ffffff]">
          <div className="grid place-items-center w-20 ml-4 m-3">
            <img
              src={profilePictureDefault}
              className=" rounded-full w-full h-full "
              alt="profile"
            />
          </div>
          <div className="w-auto m-auto ml-0">
            <p className="m-auto ml-4 text-lg font-semibold max[740]:text-xl">
              Eric Ten Hag
            </p>
            <p className="m-auto ml-6 text-sm ">Eric Ten Hag</p>
          </div>
          <div className="grid place-items-center">
            <button
              type="button"
              className="bg-gray-800/10 rounded-full relative
                          h-12 w-12 m-5 hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50"
            >
              <FontAwesomeIcon
                icon={faBars}
                className="absolute bottom-1/3 left-1/3"
              />
            </button>
          </div>
        </div>
        <div
          className="bg-gray-800 w-full h-full bg-repeat opacity-20"
          style={{ backgroundImage: `url(${wallpaper})` }}
        ></div>
        <div className="flex justify-start py-2 pl-4 border border-t-slate-600 rounded-b-2xl bg-[#ffffff]">
          <div className="flex  w-full  ml-0 h-full rounded-full relative bg-[#ffffff]   ">
            <div className="grid place-items-center rounded-l-full pl-3 bg-[#f7f7f7] ">
              <button
                type="button"
                className="bg-gray-800/10 rounded-full
                          h-10 w-10 ml-1 hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 "
              >
                <FontAwesomeIcon icon={faPaperclip} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Type a message"
              className="w-full text-slate-900 bg-[#f7f7f7]  rounded-r-full p-2 pl-auto flex-grow focus:outline-none resize-none overflow-hidden min-h-[44px] max-h-[200px]"
            />
          </div>
          <div className="grid place-items-center">
            <button
              type="button"
              className="bg-gray-800/10 rounded-full relative
                          h-12 w-12 m-3 mr-0 hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50"
            >
              <FontAwesomeIcon icon={faMicrophone} />
            </button>
          </div>
          <div className="grid place-items-center">
            <button
              type="button"
              className="bg-[#3772ec] rounded-full relative
                          h-12 w-12 m-3 ml-1 hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;