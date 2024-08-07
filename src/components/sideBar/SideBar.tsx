import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConservationPreview from "./ConversationPreview";
import AccountInfos from "./AccountInfos";

function SideBar() {
  return (
    <div className="w-1/4 flex flex-col rounded-2xl box-border bg-[#ffffff]">
      <div className="flex last:ml-auto rounded-t-2xl">
        <AccountInfos
          user={{
            username: "Faical",
            id: "zCHHJpp3Uzqflv0hSqgA",
            avatarUrl: "",
          }}
        />

        <div className="grid place-items-center">
          <button
            type="button"
            className=" rounded-full relative
                          h-10 w-10 m-auto mr-1 hover:bg-slate-50 active:bg-slate-50 focus:outline-none 
                          focus:ring focus:ring-slate-50"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[#929292] text-[12px] absolute bottom-1/3 left-1/3"
            />
          </button>
        </div>
      </div>

      <div className="rounded-2xl bg-[#ffffff] gap-1 custom-scrollbar overflow-y-auto">
        <div className="flex-none w-15 rounded-full p-2">Messages</div>
        <ConservationPreview
          user={{
            username: "Faical",
            id: "zCHHJpp3Uzqflv0hSqgA",
            avatarUrl: "",
          }}
          message={{
            id: "1",
            receiver: "ye7FZN0WFERetQEnqab4",
            sender: "zCHHJpp3Uzqflv0hSqgA",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            timestamp: "00:00 AM",
          }}
        />
        <ConservationPreview
          user={{
            username: "Faical",
            id: "zCHHJpp3Uzqflv0hSqgA",
            avatarUrl: "",
          }}
          message={{
            id: "1",
            receiver: "ye7FZN0WFERetQEnqab4",
            sender: "zCHHJpp3Uzqflv0hSqgA",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            timestamp: "00:00 AM",
          }}
        />
        <ConservationPreview
          user={{
            username: "Faical",
            id: "zCHHJpp3Uzqflv0hSqgA",
            avatarUrl: "",
          }}
          message={{
            id: "1",
            receiver: "ye7FZN0WFERetQEnqab4",
            sender: "zCHHJpp3Uzqflv0hSqgA",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            timestamp: "00:00 AM",
          }}
        />
        <ConservationPreview
          user={{
            username: "Faical",
            id: "zCHHJpp3Uzqflv0hSqgA",
            avatarUrl: "",
          }}
          message={{
            id: "1",
            receiver: "ye7FZN0WFERetQEnqab4",
            sender: "zCHHJpp3Uzqflv0hSqgA",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            timestamp: "00:00 AM",
          }}
        />
        <ConservationPreview
          user={{
            username: "Faical",
            id: "zCHHJpp3Uzqflv0hSqgA",
            avatarUrl: "",
          }}
          message={{
            id: "1",
            receiver: "ye7FZN0WFERetQEnqab4",
            sender: "zCHHJpp3Uzqflv0hSqgA",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            timestamp: "00:00 AM",
          }}
        />
        <ConservationPreview
          user={{
            username: "Faical",
            id: "zCHHJpp3Uzqflv0hSqgA",
            avatarUrl: "",
          }}
          message={{
            id: "1",
            receiver: "ye7FZN0WFERetQEnqab4",
            sender: "zCHHJpp3Uzqflv0hSqgA",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            timestamp: "00:00 AM",
          }}
        />
        <ConservationPreview
          user={{
            username: "Faical",
            id: "zCHHJpp3Uzqflv0hSqgA",
            avatarUrl: "",
          }}
          message={{
            id: "1",
            receiver: "ye7FZN0WFERetQEnqab4",
            sender: "zCHHJpp3Uzqflv0hSqgA",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            timestamp: "00:00 AM",
          }}
        />
        <ConservationPreview
          user={{
            username: "Faical",
            id: "zCHHJpp3Uzqflv0hSqgA",
            avatarUrl: "",
          }}
          message={{
            id: "1",
            receiver: "ye7FZN0WFERetQEnqab4",
            sender: "zCHHJpp3Uzqflv0hSqgA",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            timestamp: "00:00 AM",
          }}
        />
      </div>
    </div>
  );
}
export default SideBar;
