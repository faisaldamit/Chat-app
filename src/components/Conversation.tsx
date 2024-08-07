import {
  faCircle,
  faEllipsisVertical,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePictureDefault from "/public/images/profile-picture.webp";
import background from "/src/assets/background.webp";
import Message from "./Message";

function Conversation() {
  return (
    <div className="rounded-xl p-3 mr-auto">
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
        <p className="font-xs font-sans  bg-[#ffffff] border border-slate-300/50 rounded-xl p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          lorem iaculis, pulvinar quam nec, consectetur exexercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
          <Message
            message={{
              id: "1",
              receiver: "ye7FZN0WFERetQEnqab4",
              sender: "zCHHJpp3Uzqflv0hSqgA",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
              timestamp: "00:00 AM",
            }}
          />
        </div>
        <img
          src={background}
          alt="wallpaper"
          className="rounded-xl ml-auto mr-4 border-4 w-[400px] "
        />
      </div>
    </div>
  );
}

export default Conversation;
