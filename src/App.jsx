import './App.css'
import expandClick from "./Functions/expandClick.js";

function App() {

  return (
    <>
        <section className="navbar w-full h-32 flex justify-end items-center bg-[#E1D9BC]">
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
            <section className="sidebar flex gap-10 fixed top-5 -right-40 transition-all duration-400">
                <button id="expandBTN"
                        className="border-2 border-b-4 border-r-4 text-sm flex items-center justify-center mt-6 h-10 w-16"
                        onClick={expandClick}
                >expand</button>
                <div className="sidebar-container bg-[#E1D9BC] w-40 h-screen ">
                    <div className="flex text-4xl items-center justify-center">
                        <p>logo</p>
                    </div>
                    <ul className="sidebar-list mt-5 space-y-4">
                        <li className="sidebar-item border-2 max-w-10/12 border-l-4 border-b-4 px-5 mx-auto">
                            <button>Profile</button>
                        </li>
                        <li className="sidebar-item border-2 max-w-10/12  border-l-4 border-b-4 px-5 mx-auto">
                            <button>Settings</button>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
        <section className="center-content">

        </section>
    </>
  )
}

export default App
