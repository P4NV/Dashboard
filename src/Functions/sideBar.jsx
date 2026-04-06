import { useState } from 'react';

import hide from '../assets/icons/hide.png';
import search from '../assets/icons/search.png';
import setting from '../assets/icons/setting.png';
import show from '../assets/icons/show.png';
import user from '../assets/icons/user.png';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={`flex flex-col items-center rounded-3xl px-2 py-10 fixed bg-[#E1D9BC] left-10 top-40 gap-6 transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? 'w-64 min-h-[80vh]' : 'w-20 min-h-[80vh]'
            }`}
        >
            {/* Header - always visible */}
            <div className="w-full flex justify-center items-center gap-3">
                <img src={user} alt="user" className="w-10 h-10 transition-all duration-300"/>
                <h1 className={`text-2xl font-bold whitespace-nowrap transition-all duration-300 ${
                    isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 w-0'
                }`}>
                    Name
                </h1>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col w-full gap-4">
                {/* Search */}
                <button className="flex items-center gap-3 hover:bg-[#d4cab0] p-2 rounded-lg transition-all">
                    <img src={search} alt="search" className="w-8 h-8"/>
                    <span className={`whitespace-nowrap transition-all duration-500 ${
                        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 w-0'
                    }`}>
                        Search
                    </span>
                </button>

                {/* Settings */}
                <button className="flex items-center gap-3 hover:bg-[#d4cab0] p-2 rounded-lg transition-all">
                    <img src={setting} alt="settings" className="w-8 h-8"/>
                    <span className={`whitespace-nowrap transition-all duration-500 ${
                        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 w-0'
                    }`}>
                        Settings
                    </span>
                </button>

                {/* Other Items */}
                <button className="flex items-center gap-3 hover:bg-[#d4cab0] p-2 rounded-lg transition-all">
                    <img src={hide} alt="item" className="w-8 h-8"/>
                    <span className={`whitespace-nowrap transition-all duration-500 ${
                        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 w-0'
                    }`}>
                        Something
                    </span>
                </button>

                <button className="flex items-center gap-3 hover:bg-[#d4cab0] p-2 rounded-lg transition-all">
                    <img src={show} alt="item" className="w-8 h-8"/>
                    <span className={`whitespace-nowrap transition-all duration-500 ${
                        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 w-0'
                    }`}>
                        Something
                    </span>
                </button>
            </div>

            {/* Divider */}
            <hr className={`border-2 rounded-full transition-all duration-500 ${
                isOpen ? 'w-4/5 opacity-100' : 'w-0 opacity-0'
            }`}/>

            {/* Second Section */}
            <div className="flex flex-col w-full gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                    <button key={i} className="flex items-center gap-3 hover:bg-[#d4cab0] p-2 rounded-lg transition-all">
                        <img src={hide} alt="item" className="w-8 h-8"/>
                        <span className={`whitespace-nowrap transition-all duration-500 ${
                            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 w-0'
                        }`}>
                            Item {i}
                        </span>
                    </button>
                ))}
            </div>

            {/* Social Support - only shows when open */}
            <div className={`flex flex-col w-full items-center transition-all duration-300 ${
                isOpen ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
            }`}>
                <h1 className="text-sm font-semibold mb-2">Social support</h1>
                <hr className="mb-3 w-4/5 border-2 rounded-full"/>
                <div className="flex justify-center gap-2 flex-wrap">
                    <button className="hover:scale-110 transition-transform">
                        <img src={show} alt="social" className="w-6 h-6"/>
                    </button>
                    <button className="hover:scale-110 transition-transform">
                        <img src={show} alt="social" className="w-6 h-6"/>
                    </button>
                    <button className="hover:scale-110 transition-transform">
                        <img src={show} alt="social" className="w-6 h-6"/>
                    </button>
                    <button className="hover:scale-110 transition-transform">
                        <img src={show} alt="social" className="w-6 h-6"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

//triba napraviti na drugoj strani i da prvo bude vertikalno vidljive icone i onda sa
//use stateom da rendera pune liste podataka naprimjer
/*
   {isOpen ? to i to renderati : da budu samo ikone}
 */

/*
onMouseEnter/onMouseLeave funkcija za hover efect
 */