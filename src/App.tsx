import "./App.css";
import background from "./assets/background.webp";
import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Conversation from "./components/Conversation";
import { useState } from "react";


function App() {
  const [user, setUser] = useState({})
  
  return (
    <div className="bg-[#faf9fe] flex gap-5 w-full h-screen p-2">
      <SideBar />
      
      <div className="w-full col-span-3 flex flex-col bg-[#fcfdff] rounded-2xl z-999 ">
       <TopBar user={{
        username: "Faical",
        id: "zCHHJpp3Uzqflv0hSqgA",
        avatarUrl: "",
       }}/>
        <div
          className="w-ful h-full overflow-y-auto bg-slate-100 border border-slate-200"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="bg-white h-full bg-opacity-85 overflow-y-auto">
            <Conversation/>
          </div>
        </div>
       <BottomBar/>
      </div>
    </div>
  );
}
export default App;
