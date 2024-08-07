import {
  faPaperclip,
  faMicrophone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BottomBar() {
  return (
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
  );
}
export default BottomBar ;