import './App.css'

function App() {

  return (
    <>
        <section className="navbar w-full h-25 flex justify-end items-center bg-amber-100">
            <div className="navbar-container flex-row mx-auto">
                <ul className="navbar-buttons flex flex-row justify-center gap-20">
                    <li className="nav-item">
                        <button>Home</button>
                    </li>
                    <li className="nav-item">
                        <button>Statistics</button>
                    </li>
                    <li className="nav-item">
                        <button>Tasks</button>
                    </li>
                    <li className="nav-item">
                        <button>Settings</button>
                    </li>
                </ul>
            </div>
            <section className="sidebar fixed pr-10">
                <div className="sidebar-container">
                    <ul className="sidebar-list">
                        <li className="sidebar-item">
                            <button>Profile</button>
                        </li>
                        <li className="sidebar-item">
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
