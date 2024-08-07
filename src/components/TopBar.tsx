import { IUser } from "../interfaces";
import profilePictureDefault from "/public/images/profile-picture.webp";
interface Props {
  user: IUser;
}

function TopBar({ user }: Props) {
  return (
    <div className="flex flex-row justify-start last:ml-auto border border-b-white-50 rounded-t-2xl bg-[#ffffff]">
      <div className="grid place-items-center w-20 ml-4 m-3">
        <img
          src={profilePictureDefault}
          className=" rounded-full w-full h-full "
          alt="profile"
        />
      </div>
      <div className="w-auto m-auto ml-0">
        <p className="m-auto text-lg font-semibold max[740]:text-xl">
          {user.username}
        </p>
        <p className=" text-sm ">Eric Ten Hag</p>
      </div>
    </div>
  );
}

export default TopBar;
