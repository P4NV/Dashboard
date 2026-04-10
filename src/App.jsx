import './App.css'
import {useState} from "react";
import SideBar from "./Functions/sideBar.jsx";
import Home from "./pages/Home.jsx";
import Statistics from "./pages/Statistics.jsx";

function App() {

    const [active, setActive] = useState("home")

  return (
    <div className="flex flex-row flex-wrap max-vh-100 overflow-hidden ">
        <section className="navbar w-full h-[13vh] flex justify-end items-center bg-[#E1D9BC]">
            <div className="navbar-container flex-row mx-auto">
                <ul className="navbar-buttons flex flex-row justify-center gap-20">
                    <li className="nav-item hover:scale-105 transition-all duration-200">
                        <button onClick={() => setActive("home")} className="border-r-4 border-b-4 border-2 rounded-br-2xl rounded-tl-2xl bg-[#ACBAC4] text-[2em] px-5">Home</button>
                    </li>
                    <li className="nav-item hover:scale-105 transition-all duration-200">
                        <button onClick={() => setActive("statistics")} className="border-r-4 border-b-4 border-2 rounded-br-2xl rounded-tl-2xl bg-[#ACBAC4] text-[2em] px-5">Statistics</button>
                    </li>
                    <li className="nav-item hover:scale-105 transition-all duration-200">
                        <button onClick={() => setActive("tasks")} className="border-r-4 border-b-4 border-2 rounded-br-2xl rounded-tl-2xl bg-[#ACBAC4] text-[2em] px-5">Tasks</button>
                    </li>
                    <li className="nav-item hover:scale-105 transition-all duration-200">
                        <button onClick={() => setActive("journal")} className="border-r-4 border-b-4 border-2 rounded-br-2xl rounded-tl-2xl bg-[#ACBAC4] text-[2em] px-5">Journal</button>
                    </li>
                </ul>
            </div>
                <SideBar />
        </section>
        {active === "home" &&
        <div>
            <Home/>
        </div>
        }
        {active === "statistics" &&
        <div>
            <Statistics/>
        </div>
        }
    </div>
  )
}

export default App



/*
imat ce financijsku sekciju, journalizam, tasks,goals,trackeri za nesto i tako dalje
 */