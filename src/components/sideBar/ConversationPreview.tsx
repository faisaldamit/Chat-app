import { IMessage, IUser } from "../../interfaces";
import profilePictureDefault from "/public/images/profile-picture.webp";
interface Props {
  user:IUser,
  message : IMessage;
}
function ConservationPreview ( {user ,message}:Props ) {
  return (
    <button
      className=" flex hover:bg-slate-50 active:bg-slate-50 focus:outline-none focus:ring focus:ring-slate-50 cursor-pointer"
    >
      <div className="grid place-items-center w-1/6 h-full  m-2">
        <img
          src={profilePictureDefault}
          className=" rounded-full w-full h-full "
          alt="profile"
        />
      </div>
      <div className="flex flex-wrap my-auto mt-2 justify-between w-3/4 ">
        <div className="">
          <p className="text-md font-semibold ">
            {user.username}
          </p>
        </div>

        <div className="flex flex-row m-auto mr-3">
          <p className="font-semibold text-[#929292] text-[10px]">
            {message.timestamp}
          </p>
        </div>
        <div className="mt-1 flex justify-between w-full mr-2 my-auto  ">
          <p className="text-xs text-[#929292]">info account</p>
          <div className="grid place-items-center w-4 h-4 m-2 my-auto mr-2 rounded-full bg-red-600">
            <span className="text-center text-xs text-white">1</span>
          </div>
        </div>
      </div>
    </button>
  );
}
export default ConservationPreview;
