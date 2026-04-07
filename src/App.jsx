import './App.css'
import SideBar from "./Functions/sideBar.jsx";
import { PieWithGradient, CustomizeLabels } from "./pages/Charts.jsx";

function App() {

  return (
    <div className="flex flex-row flex-wrap max-vh-100 overflow-hidden ">
        <section className="navbar w-full h-[13vh] flex justify-end items-center bg-[#E1D9BC]">
            <div className="navbar-container flex-row mx-auto">
                <ul className="navbar-buttons flex flex-row justify-center gap-20">
                    <li className="nav-item hover:scale-105 transition-all duration-200">
                        <button className="border-r-4 border-b-4 border-2 px-5">Home</button>
                    </li>
                    <li className="nav-item hover:scale-105 transition-all duration-200">
                        <button className="border-r-4 border-b-4 border-2 px-5">Statistics</button>
                    </li>
                    <li className="nav-item hover:scale-105 transition-all duration-200">
                        <button className="border-r-4 border-b-4 border-2 px-5">Tasks</button>
                    </li>
                    <li className="nav-item hover:scale-105 transition-all duration-200">
                        <button className="border-r-4 border-b-4 border-2 px-5">Settings</button>
                    </li>
                </ul>
            </div>
                <SideBar />
        </section>
        <section className="center-content border-12 min-w-screen max-h-[87vh]  min-h-[87vh] flex flex-col items-end gap-2 pl-25 pr-10">
            <PieWithGradient/>
            <CustomizeLabels/>
        </section>
    </div>
  )
}

export default App



/*
imat ce financijsku sekciju, journalizam, tasks,goals,trackeri za nesto i tako dalje
 */