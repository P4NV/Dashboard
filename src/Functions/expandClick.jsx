import { useState } from 'react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`fixed top-0 h-screen transition-all duration-500 ${isOpen ? 'right-0' : '-right-40'}`}>
            <div className="bg-[#E1D9BC] w-40 h-full relative">
                {/* Button positioned on left edge */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute -left-10 -translate-x-full border-2 border-b-4 border-r-4 text-sm flex items-center justify-center top-11 h-10 w-16"
                >
                    {isOpen ? 'Close' : 'Menu'}
                </button>

                <div className="flex text-4xl items-center justify-center pt-6">
                    <p>logo</p>
                </div>
                <ul className="mt-5 space-y-4">
                    <li className="border-2 max-w-10/12 border-l-4 border-b-4 px-5 mx-auto">
                        <button>Profile</button>
                    </li>
                    <li className="border-2 max-w-10/12 border-l-4 border-b-4 px-5 mx-auto">
                        <button>Settings</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

//triba napraviti na drugoj strani i da prvo bude vertikalno vidljive icone i onda sa
//use stateom da rendera pune liste podataka naprimjer
/*
   {isOpen ? to i to renderati : da budu samo ikone}
 */