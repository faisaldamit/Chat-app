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
  faCircle,
  faCheckDouble,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="bg-[#faf9fe] w-full h-svh p-2 grid grid-cols-4 gap-4 max-[850]:grid-cols-3 max-[850]:grid ">
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
          <div className="w-auto mr-auto p-4 pl-1 max-[900px]:w-1/2 pt-6  ">
            <p className="text-sm font-semibold ">Eric Ten Hag</p>
            <a href="">
              <p className="text-sm text-[#929292]">Info account</p>
            </a>
          </div>

          <div className="grid place-items-center">
            <button
              type="button"
              className=" rounded-full relative
                          h-12 w-12 m-5 hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50"
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-[#929292] absolute bottom-1/3 left-1/3"
              />
            </button>
          </div>
        </div>
        <div className=" rounded-full m-auto w-11/12 bg-[#f7f7f7] flex justify-around">
          <button
            type="button"
            className="py-2 px-5 rounded-full bg-[f7f7f7] hover:bg-white active:bg-white"
          >
            All
          </button>
          <button
            type="button"
            className="py-2 px-5 rounded-full bg-[f7f7f7] hover:bg-white active:bg-white"
          >
            Personal
          </button>
          <button
            type="button"
            className="py-2 px-5 rounded-full bg-[f7f7f7] hover:bg-white active:bg-white"
          >
            Groups
          </button>
        </div>
        <div className="rounded-2xl bg-[#ffffff] gap-1 ">
          <div className=" flex  justify-between ">
            <div className="flex-none w-15 rounded-full p-2">
              Pinned messages
            </div>
            <div className="flex-none  ">
              <FontAwesomeIcon icon={faThumbTack} className="w-10 mt-3 mr-4" />
            </div>
          </div>

          <button
            className=" flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <div className="grid place-items-center w-1/6 h-full  m-2 max-[600px]:w-1/4">
              <img
                src={profilePictureDefault}
                className=" rounded-full w-full h-full "
                alt="profile"
              />
            </div>
            <div className="flex flex-wrap my-auto mt-2 justify-between w-3/4 ">
              
                <div className="">
                  <p className="text-md font-semibold ">
                  Eric Ten Hag
                </p>
                </div>

              <div className="flex flex-row m-auto mr-3">
                <FontAwesomeIcon
                  icon={faThumbTack}
                  className="text-xs/10 text-[#929292] m-auto mr-2 "
                ></FontAwesomeIcon>
                <p className=" font-semibold text-[#929292] text-[10px]">
                  00:00 AM
                </p>
              </div>
              <div className="mt-1 " >
                <p className="text-xs text-[#929292]">info account</p>
              </div>
            </div>
          </button>
          <button
            className=" flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <div className="grid place-items-center w-1/6 h-full  m-2 max-[600px]:w-1/4">
              <img
                src={profilePictureDefault}
                className=" rounded-full w-full h-full "
                alt="profile"
              />
            </div>
            <div className="flex flex-wrap my-auto mt-2 justify-between w-3/4 ">
              
                <div className="">
                  <p className="text-md font-semibold ">
                  Eric Ten Hag
                </p>
                </div>

              <div className="flex flex-row m-auto mr-3">
                <FontAwesomeIcon
                  icon={faThumbTack}
                  className="text-xs/10 text-[#929292] m-auto mr-2 "
                ></FontAwesomeIcon>
                <p className=" font-semibold text-[#929292] text-[10px]">
                  00:00 AM
                </p>
              </div>
              <div className="mt-1 " >
                <p className="text-xs text-[#929292]">info account</p>
              </div>
            </div>
          </button>
          <div className="flex-none w-15 rounded-full p-2">Messages</div>
          <button
            className=" flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <div className="grid place-items-center w-1/6 h-full  m-2 max-[600px]:w-1/4">
              <img
                src={profilePictureDefault}
                className=" rounded-full w-full h-full "
                alt="profile"
              />
            </div>
            <div className="flex flex-wrap my-auto mt-2 justify-between w-3/4 ">
              
                <div className="">
                  <p className="text-md font-semibold ">
                  Eric Ten Hag
                </p>
                </div>

              <div className="flex flex-row m-auto mr-3">
                <FontAwesomeIcon
                  icon={faThumbTack}
                  className="text-xs/10 text-[#929292] m-auto mr-2 "
                ></FontAwesomeIcon>
                <p className=" font-semibold text-[#929292] text-[10px]">
                  00:00 AM
                </p>
              </div>
              <div className="mt-1 flex justify-between w-full mr-2 my-auto  " >
                <p className="text-xs text-[#929292]">info account</p>
                <div className="grid place-items-center w-4 h-4 m-2 my-auto mr-2 rounded-full bg-red-600">
                <span className="text-center text-xs text-white">1</span>
              </div>
              </div>
            </div>
          </button>
              
          <button
            className=" flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <div className="grid place-items-center w-1/6 h-full  m-2 max-[600px]:w-1/4">
              <img
                src={profilePictureDefault}
                className=" rounded-full w-full h-full "
                alt="profile"
              />
            </div>
            <div className="flex flex-wrap my-auto mt-2 justify-between w-3/4 ">
              
                <div className="">
                  <p className="text-md font-semibold ">
                  Eric Ten Hag
                </p>
                </div>

              <div className="flex flex-row m-auto mr-3">
                <FontAwesomeIcon
                  icon={faThumbTack}
                  className="text-xs/10 text-[#929292] m-auto mr-2 "
                ></FontAwesomeIcon>
                <p className=" font-semibold text-[#929292] text-[10px]">
                  00:00 AM
                </p>
              </div>
              <div className="mt-1 flex justify-between w-full mr-2 my-auto  " >
                <p className="text-xs text-[#929292]">info account</p>
                <div className="grid place-items-center w-4 h-4 m-2 my-auto mr-2 rounded-full bg-red-600">
                <span className="text-center text-xs text-white">1</span>
              </div>
              </div>
            </div>
          </button>
          <button
            className=" flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <div className="grid place-items-center w-1/6 h-full  m-2 max-[600px]:w-1/4">
              <img
                src={profilePictureDefault}
                className=" rounded-full w-full h-full "
                alt="profile"
              />
            </div>
            <div className="flex flex-wrap my-auto mt-2 justify-between w-3/4 ">
              
                <div className="">
                  <p className="text-md font-semibold ">
                  Eric Ten Hag
                </p>
                </div>

              <div className="flex flex-row m-auto mr-3">
                <FontAwesomeIcon
                  icon={faThumbTack}
                  className="text-xs/10 text-[#929292] m-auto mr-2 "
                ></FontAwesomeIcon>
                <p className=" font-semibold text-[#929292] text-[10px]">
                  00:00 AM
                </p>
              </div>
              <div className="mt-1 flex justify-between w-full mr-2 my-auto  " >
                <p className="text-xs text-[#929292]">info account</p>
                <div className="grid place-items-center w-4 h-4 m-2 my-auto mr-2 rounded-full bg-red-600">
                <span className="text-center text-xs text-white">1</span>
              </div>
              </div>
            </div>
          </button>

          <button
            className=" flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <div className="grid place-items-center w-1/6 h-full  m-2 max-[600px]:w-1/4">
              <img
                src={profilePictureDefault}
                className=" rounded-full w-full h-full "
                alt="profile"
              />
            </div>
            <div className="flex flex-wrap my-auto mt-2 justify-between w-3/4 ">
              
                <div className="">
                  <p className="text-md font-semibold ">
                  Eric Ten Hag
                </p>
                </div>

              <div className="flex flex-row m-auto mr-3">
                <FontAwesomeIcon
                  icon={faThumbTack}
                  className="text-xs/10 text-[#929292] m-auto mr-2 "
                ></FontAwesomeIcon>
                <p className=" font-semibold text-[#929292] text-[10px]">
                  00:00 AM
                </p>
              </div>
              <div className="mt-1 flex justify-between w-full mr-2 my-auto  " >
                <p className="text-xs text-[#929292]">info account</p>
                <div className="grid place-items-center w-4 h-4 m-2 my-auto mr-2 rounded-full bg-red-600">
                <span className="text-center text-xs text-white">1</span>
              </div>
              </div>
            </div>
          </button>
          <button
            className=" flex max-[600px]:justify-between hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50 cursor-pointer"
          >
            <div className="grid place-items-center w-1/6 h-full  m-2 max-[600px]:w-1/4">
              <img
                src={profilePictureDefault}
                className=" rounded-full w-full h-full "
                alt="profile"
              />
            </div>
            <div className="flex flex-wrap my-auto mt-2 justify-between w-3/4 ">
              
                <div className="">
                  <p className="text-md font-semibold ">
                  Eric Ten Hag
                </p>
                </div>

              <div className="flex flex-row m-auto mr-3">
                <FontAwesomeIcon
                  icon={faThumbTack}
                  className="text-xs/10 text-[#929292] m-auto mr-2 "
                ></FontAwesomeIcon>
                <p className=" font-semibold text-[#929292] text-[10px]">
                  00:00 AM
                </p>
              </div>
              <div className="mt-1 flex justify-between w-full mr-2 my-auto  " >
                <p className="text-xs text-[#929292]">info account</p>
                <div className="grid place-items-center w-4 h-4 m-2 my-auto mr-2 rounded-full bg-red-600">
                <span className="text-center text-xs text-white">1</span>
              </div>
              </div>
            </div>
          </button>  

         
        </div>
      </div>
      <div className=" col-span-3 flex flex-col justify-between bg-[#fcfdff] rounded-2xl z-999 ">
        <div className="flex flex-row justify-start last:ml-auto border border-b-slate-200 rounded-t-2xl bg-[#ffffff]">
          <div className="grid place-items-center w-20 ml-4 m-3">
            <img
              src={profilePictureDefault}
              className=" rounded-full w-full h-full "
              alt="profile"
            />
          </div>
          <div className="w-auto m-auto ml-0">
            <p className="m-auto text-lg font-semibold max[740]:text-xl">
              Eric Ten Hag
            </p>
            <p className=" text-sm ">Eric Ten Hag</p>
          </div>
          <div className="grid place-items-center">
            <button
              type="button"
              className=" rounded-full relative
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
        <div className="w-auto bg-slate-100 border border-slate-200 overflow-y-auto">
          <nav className="grid place-items-center w-full z-999">
            <div className=" mt-3 rounded-full">
              <p className="p-2 text-xs font-semibold text-[#707070]">Today</p>
            </div>
          </nav>
          <div className=" rounded-xl p-3 m-3 mr-auto">
            <div className="flex ">
              <img
                src={profilePictureDefault}
                alt="profile"
                className="rounded-full w-7 h-7"
              />
              <p className=" mx-3 text-md font-semibold">Faical Babtayen</p>
              <FontAwesomeIcon
                icon={faCircle}
                className="text-black text-[5px] my-auto ml-0"
              ></FontAwesomeIcon>
              <p className="ml-3 m-auto font-semibold text-[#929292] text-xs">
                00:00 AM
              </p>
            </div>

            <div className="max-w-lg ml-7 flex">
              <p className="font-xs font-sans  bg-slate-50 border border-slate-300/50 rounded-xl p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sit amet lorem iaculis, pulvinar quam nec, consectetur ex.
              </p>
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="text-[#929292] text-xl m-auto ml-2"
              ></FontAwesomeIcon>
            </div>
            <div className=" rounded-xl p-3 m-3 mr-auto">
              <div className="flex justify-end">
                <p className=" mx-3 text-md font-semibold">You</p>
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-black text-[5px] mr-0 my-auto "
                ></FontAwesomeIcon>
                <p className=" m-auto mx-3 font-semibold text-[#929292] text-xs">
                  00:00 AM
                </p>
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  className="text-blue-500 text-sm mr-0 my-auto"
                ></FontAwesomeIcon>
              </div>

              <div className="max-w-md rounded-xl p-3 ml-auto flex">
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  className="text-[#3b3b3bbb] text-xl m-auto mr-2"
                ></FontAwesomeIcon>
                <p className="bg-[#3b72ff] p-4 rounded-xl font-xs font-sans text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  sit amet lorem iaculis, pulvinar quam nec, consectetur ex.
                  Morbi pharetra, nibh at tincidunt venenatis, nunc sem congue
                  orci, a sagittis ligula nisi id sem. Nullam tincidunt mauris
                  id ante placerat egestas. Cras eget turpis quis mi blandit
                  mollis. Vestibulum semper lectus id sem posuere, quis semper
                  mauris tincidunt. Sed et ultricies leo. Maecenas tristique
                  odio massa, sit amet placerat sem ultricies sit amet. In ut
                  enim nisl.
                </p>
              </div>
              <img
                src={wallpaper}
                alt="wallpaper"
                className="rounded-xl ml-auto mr-4 border-4 w-[400px] "
              />
            </div>
          </div>
        </div>
        <div className="flex justify-start py-2 pl-4 border border-t-slate-200 rounded-b-2xl bg-[#ffffff]">
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
              className="bg-white border-2 border-slate-300 rounded-full relative
                          h-12 w-12 m-3 mr-0 hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50"
            >
              <FontAwesomeIcon icon={faMicrophone} />
            </button>
          </div>
          <div className="grid place-items-center">
            <button
              type="button"
              className="bg-[#2d64fa] rounded-full relative
                          h-12 w-12 m-3 ml-1 hover:bg-slate-500 active:bg-slate-50/10 focus:outline-none 
                          focus:ring focus:ring-slate-500"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
