import { IUser } from "../../interfaces";
import profilePictureDefault from "/public/images/profile-picture.webp";
interface Props {
  user: IUser;
}

function AccountInfos( { user }: Props ) {
  return (
    <>
      <div className="grid place-items-center w-1/6 m-2 max-[740px]:w-1/5 ">
        <img
          src={profilePictureDefault}
          className="rounded-full w-full "
          alt="profile"
        />
      </div>
      <div className="w-auto mr-auto p-4 pl-1 max-[900px]:w-1/2 pt-6  ">
        <p className="text-sm font-semibold ">
          {user.username}
          </p>
        <a href="">
          <p className="text-sm text-[#929292]">Info account</p>
        </a>
      </div>
    </>
  );
}
export default AccountInfos;
