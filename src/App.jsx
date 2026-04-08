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
        <section className="center-content pt-2 min-w-screen max-h-[87vh]  min-h-[87vh] flex flex-col items-end gap-2 pl-25 pr-10">
            <div className="flex flex-row min-w-[90vw] max-h-[35vh] mt-5">
                <div className="flex flex-row justify-evenly w-full pr-5 ">
                    <div className="min-w-[30%] min-h-fit border-2 border-amber-50 rounded-4xl bg-gray-500/50"></div>
                    <div className="min-w-[30%] min-h-fit border-2 border-amber-50 rounded-4xl bg-gray-500/50"></div>
                    <div className="min-w-[30%] min-h-fit border-2 border-amber-50 rounded-4xl bg-gray-500/50"></div>
                </div>
                <PieWithGradient/>
            </div>
            <div className='flex justify-end w-[90vw] mt-8 max-h-[41vh]'>
                <div className="w-[35%] min-h-[30vh] border-2 border-amber-50 rounded-4xl bg-gray-500/50 mr-auto ml-7">

                </div>
                <div className=" w-[16%] mx-9 border-2 border-amber-50 rounded-4xl bg-gray-500/50">

                </div>
                <CustomizeLabels/>
            </div>
        </section>
    </div>
  )
}

export default App



/*
imat ce financijsku sekciju, journalizam, tasks,goals,trackeri za nesto i tako dalje
 */